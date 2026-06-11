import "dotenv/config";
import { defineConfig } from "prisma/config";

export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
    seed: "pnpx tsx --env-file=.env prisma/seed.ts",
  },

 
  datasource: {
    // Next.js automatically loads process.env.DATABASE_URL from your .env file
    url: process.env.DATABASE_URL,
  },
});