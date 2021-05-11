import * as jwt from "koa-jwt";
import * as bodyParser from "koa-bodyparser";

export default (app) => {
  miRule(app);
  app.use(bodyParser);
  app.use(jwt({ secret: SECRET }).unless({
    path: [/^\/api\/login/, /^\api\/register/]
  }));
};
