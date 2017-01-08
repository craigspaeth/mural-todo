import unikoa from 'unikoa'
import render from 'unikoa-react-render'
import { index, state } from './controllers'
import Head from './views/head'

const router = unikoa()

router.use(render({
  head: Head,
  subscribe: (cb) => state.on('update', cb)
}))
router.get('/', index)

export default router
