import { drizzle } from "drizzle-orm/libsql";

const database = drizzle({
  connection: {
    url: process.env.DB_FILE!,
  },
});

export { database };
