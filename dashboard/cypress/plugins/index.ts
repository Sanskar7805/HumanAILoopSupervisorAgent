//eslint-disable-next-line
const { startDevServer } = require("@cypress/vite-dev-server");

module.exports = (on, config) => {
  on("dev-server:start", (options) => {
    return startDevServer({ options });
  });

  return config;
};
