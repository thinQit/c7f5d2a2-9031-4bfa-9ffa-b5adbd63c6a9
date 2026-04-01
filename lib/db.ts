import { PrismaClient } from "@prisma/client";

declare global {
  // eslint-disable-next-line no-var
  var prisma: PrismaClient | undefined;
}

const databaseUrl = process.env.DATABASE_URL;

const createPrismaClient = () =>
  new PrismaClient({
    log: process.env.NODE_ENV === "development" ? ["query", "error", "warn"] : ["error"],
  });

const missingDatabaseUrlError = new Error(
  "DATABASE_URL is not set. Database access is disabled until the environment variable is configured."
);

const createSafePrismaClient = (): PrismaClient => {
  const modelHandler: ProxyHandler<Record<string, unknown>> = {
    get(_target, prop) {
      if (prop === "findMany") return async () => [];
      if (prop === "findFirst" || prop === "findUnique") return async () => null;
      if (prop === "count") return async () => 0;
      if (prop === "aggregate") return async () => ({ _count: 0 });
      if (prop === "create" || prop === "update" || prop === "delete" || prop === "upsert") {
        return async () => {
          throw missingDatabaseUrlError;
        };
      }
      if (prop === "createMany" || prop === "updateMany" || prop === "deleteMany") {
        return async () => ({ count: 0 });
      }
      return async () => null;
    },
  };

  const rootHandler: ProxyHandler<Record<string, unknown>> = {
    get(_target, prop) {
      if (prop === "$connect" || prop === "$disconnect") {
        return async () => undefined;
      }
      if (prop === "$transaction") {
        return async (input: unknown) => {
          if (Array.isArray(input)) {
            return Promise.all(input.map(async (item) => (typeof item === "function" ? item() : item)));
          }
          if (typeof input === "function") {
            return input(createSafePrismaClient());
          }
          return [];
        };
      }
      if (typeof prop === "string" && prop.startsWith("$")) {
        return async () => {
          throw missingDatabaseUrlError;
        };
      }
      return new Proxy({}, modelHandler);
    },
  };

  return new Proxy({} as PrismaClient, rootHandler);
};

export const db: PrismaClient = (() => {
  if (!databaseUrl) {
    if (process.env.NODE_ENV !== "production") {
      console.warn(missingDatabaseUrlError.message);
    }
    return createSafePrismaClient();
  }

  if (global.prisma) {
    return global.prisma;
  }

  const client = createPrismaClient();
  if (process.env.NODE_ENV !== "production") {
    global.prisma = client;
  }
  return client;
})();
