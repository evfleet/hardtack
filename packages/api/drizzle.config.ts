import "dotenv/config";
import { defineConfig } from "drizzle-kit";

export default defineConfig({
  out: "./migrations",
  schema: "./src/database/schema.ts",
  dialect: "sqlite",
  dbCredentials: {
    url: process.env.DB_FILE!,
  },
});
