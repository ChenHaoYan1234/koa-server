import * as Router from "koa-router";
import * as controllers from "./controllers";

const route = new Router({
  prefix: "/api/v1",
});

export default (app) => {
  route("/register",controllers.register);
  app.use(route.routes()).use(route.allowedMethods());
};
