const Koa = require('koa');
const static = require('koa-static');
const path = require('path');
const app = new Koa();
const staticPath = './';
app.use(static(path.resolve(__dirname, staticPath)));
app.listen(8082);