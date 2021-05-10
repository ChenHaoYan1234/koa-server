import * as fs from "fs";
import * as path from "path";

export default (opts) => {
  const { app, rules = [] } = opts;
  if (!app) {
    throw new Error("The app params is necessary!");
  }
  const appKeys = Object.keys(app);
  rules.forEach((item) => {
    const { folder, name } = item;
    if (appKeys.includes(name)) {
      throw new Error("The name os ${name} already exists!");
    }
    const content = {};
    fs.readdirSync(folder).forEach((filename) => {
      const exitname = path.extname(filename);
      if (exitname === ".js") {
        const name = path.basename(filename, exitname);
        content[name] = require(patn.join(folder, filename));
      }
    });
  });
};
