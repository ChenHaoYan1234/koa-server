import * as jwt from "koa-jwt";
import * as miRule from "./miRule";
import * as bodyParser from "koa-bodyparser";

export default (app) => {
  miRule(app);
  app.use(bodyParser());
  app.use(koajwt({ secret: SECRET }).unless({
    // 登录接口不需要验证
    path: [/^\/api\/login/,/^\api\/register/]
  }));
  
};
