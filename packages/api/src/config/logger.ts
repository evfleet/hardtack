export const logger = {
  development: {
    transport: {
      target: "pino-pretty",
    },
  },
  production: true,
  test: false,
};
