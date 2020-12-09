import { Application, Router, RouterContext } from 'https://deno.land/x/oak@v6.3.2/mod.ts'

const app = new Application()
const router = new Router()

const PORT = 1337

router.get('/', (ctx: RouterContext) => {
  ctx.response.body = 'Hello 🌍 !'
})

app.use(router.routes())
app.use(router.allowedMethods())

app.addEventListener('listen', ({hostname, port, secure}) => {
  console.log(`Listening on ${secure ? 'https://' : 'http://'}${hostname || 'localhost'}:${port}...`)
})

await app.listen({ port: PORT})
