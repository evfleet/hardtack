type NodeEnv = "development" | "production" | "test";

const env = process.env.NODE_ENV as NodeEnv;

if (!env) {
  console.warn(
    "\x1b[33m",
    "Node environment is not set. Application may not work as intended.",
    "\x1b[0m"
  );
}

export { env };
