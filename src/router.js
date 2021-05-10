const router = require("koa-router");
const rouet = new router();

module.exports = (app) => {
  app.use(route.routes()).use(rouet.allowedMethods());
};
