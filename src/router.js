import * as Router from "koa-router";

const route = new Router({
  prefix: "/api",
});

export default (app) => {
  app.use(route.routes()).use(route.allowedMethods());
};
