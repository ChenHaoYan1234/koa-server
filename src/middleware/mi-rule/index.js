const path = require("path");
const fs = require("fs");

module.exports = function (opts) {
  const { app, rules = [] } = opts;
  if (!app) {
    throw new Error("The app params is necessary!");
  }
};
