import { setDatabaseConfig } from "@palmares/databases";
import { DrizzleDatabaseAdapter } from "@palmares/drizzle-engine";
import { drizzle as drizzleBetterSqlite3 } from "@palmares/drizzle-engine/better-sqlite3";
import { NodeStd } from "@palmares/node-std";
import Database from "better-sqlite3";
import { drizzle as drizzleNodePostgres } from "@palmares/drizzle-engine/node-postgres";
import dotenv from "dotenv";
dotenv.config();
export const db = drizzleNodePostgres(process.env.DATABASE_URL!);

import { User, Analytics, ShorterLink } from "./src/models";

// SQLITE database
// const database = new Database('sqlite.db');
// export const db = drizzleBetterSqlite3(database);

/**
 * To use with postgres database uncomment the following lines
 */
// import 'dotenv/config';

const newEngine = DrizzleDatabaseAdapter.new({
  output: "./.drizzle/schema.ts",
  type: "postgres",
  drizzle: db,
});

const std = new NodeStd();

export default setDatabaseConfig({
  databases: {
    default: {
      engine: newEngine,
    },
  },
  locations: [
    {
      name: "default",
      // dirname and fileURLToPath is just for compatibility with older versions of Node.js
      // Remove if you are using Node.js 20.0.0 or higher
      path:
        import.meta.dirname ||
        std.files.dirname(std.files.getFileURLToPath(import.meta.url)),
      getMigrations: () => [],
      getModels: () => [User, Analytics, ShorterLink],
    },
  ],
  std,
});
