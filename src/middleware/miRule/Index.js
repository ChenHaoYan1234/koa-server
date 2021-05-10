const path = require("path");
const fs = require("fs");

module.exports = (opts) => {
  const { app, rules = [] } = opts;
  if (!app) {
    throw new Error("The app params is necessary!");
  }
  const appKeys = Object.keys(app);
  rules.forEach(item);
};
