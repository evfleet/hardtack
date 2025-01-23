import { build } from "./app.js";

(async () => {
  const app = await build();

  async function start() {
    await app.listen({
      port: 8080,
    });
  }

  async function stop() {
    await app.close();
    process.exit(0);
  }

  process.on("SIGINT", stop);
  process.on("SIGTERM", stop);

  start();
})();
