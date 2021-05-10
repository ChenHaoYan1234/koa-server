import * as miRule from "./miRule";
import * as bodyParser from "koa-bodyparser";

export default (app) => {
  miRule(app);
  app.use(bodyParser());
};
