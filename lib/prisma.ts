import 'server-only';
import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import pg from "pg";

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

// 1. Setup the native PG connection pool using your database URL
const pool = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
});

// 2. Instantiate the Prisma 7 driver adapter wrapper
const adapter = new PrismaPg(pool);

// 3. Initialize Prisma Client with the modern adapter structure
export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({ adapter });

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}