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

export const db: PrismaClient = (() => {
  if (!databaseUrl) {
    return new Proxy({} as PrismaClient, {
      get() {
        throw missingDatabaseUrlError;
      },
    });
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
