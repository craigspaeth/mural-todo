import Koa from 'koa'
import { koaize } from 'mojol'
import router from './router'
import models from './models'

const app = new Koa()

app.use(koaize('/api', ...models))
app.use(router.routes())

export default app
