import "dotenv/config";
import fastify from "fastify";

import { env } from "./config/constants.js";
import { logger } from "./config/logger.js";

export async function build() {
  const app = fastify({
    logger: logger[env] ?? true,
  });

  app.get("/", {
    handler: async (req, reply) => {
      return reply.send({
        message: "Hello World",
      });
    },
  });

  return app;
}
