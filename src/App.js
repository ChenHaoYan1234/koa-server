import * as Koa from "koa";
import * as route from "./Router";
import * as middleware from "./middleware";

const app = new Koa();

route(app);
middleware(app);

app.listen(8888);
