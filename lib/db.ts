import { PrismaClient } from "@prisma/client";
import { currentUser } from "@client-extension/lib/extensions/current-user";

const client = new PrismaClient().$extends(currentUser());

const globalForPrisma = global as unknown as {
	prisma: typeof client;
};

export const db = globalForPrisma.prisma || client;

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = db;

export default db;
