import { PrismaClient } from "@prisma/client";

const noopError = new Error("DATABASE_URL is not configured. Database access is disabled.");

const modelHandler: ProxyHandler<Record<string, unknown>> = {
  get(_target, prop) {
    if (prop === "findMany") return async () => [];
    if (prop === "findFirst" || prop === "findUnique") return async () => null;
    if (prop === "count") return async () => 0;
    if (prop === "aggregate") return async () => ({ _count: 0 });
    if (prop === "create" || prop === "update" || prop === "delete" || prop === "upsert") {
      return async () => { throw noopError; };
    }
    if (prop === "createMany" || prop === "updateMany" || prop === "deleteMany") {
      return async () => ({ count: 0 });
    }
    return async () => null;
  },
};

const rootHandler: ProxyHandler<Record<string, unknown>> = {
  get(_target, prop) {
    if (prop === "$connect" || prop === "$disconnect") return async () => undefined;
    if (prop === "$transaction") {
      return async (input: unknown) => {
        if (Array.isArray(input)) return Promise.all(input.map(async (item) => (typeof item === "function" ? item() : item)));
        if (typeof input === "function") return input(db);
        return [];
      };
    }
    if (typeof prop === "string" && prop.startsWith("$")) return async () => { throw noopError; };
    return new Proxy({}, modelHandler);
  },
};

export const db: PrismaClient = new Proxy({} as PrismaClient, rootHandler);
