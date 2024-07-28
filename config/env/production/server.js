module.exports = ({ env }) => ({
  proxy: true,
  url: env("HOST", "0.0.0.0"),
  port: env.int("PORT", 1337),
  // url: env("HOST"), // Sets the public URL of the application.
  app: {
    keys: env.array("APP_KEYS"),
  },
});
