const { build, serve } = require('esbuild')
const { createServer, request } = require('http')
const { spawn }  = require('child_process')
require('dotenv-safe').config();

const define = {}
const clients = []

for (const k in process.env) {
  if(k !== `affinity:container`)
  define[`process.env.${k}`] = JSON.stringify(process.env[k])
}

const options = {
    // stdio: 'inherit',
    entryPoints: ['./src/app.ts'],
    outfile: './dist/index.js',
    minify: true,
    bundle: true,
    platform: "node",
    define,
    watch: process.env.NODE_ENV === 'development' ? {
      onRebuild(error, result) {
        if (error) console.error('watch build failed:', error)
        else console.log('watch build succeeded:', result)
      },
    } : undefined,
  }
  
  build(options).then(result => {
    console.log('watching mode is active...')

    // setTimeout(() => {
    //   result.stop()
    //   console.log('stopped watching')
    // }, 1000)

  }).catch(err => {
    console.log('watching mode is active...')
    process.stderr.write(err.stderr)
    process.exit(1)
  })

  // serve({ servedir: './dist' }, {}).then(() => {
  //   createServer((req, res) => {
  //     const { url, method, headers } = req
  //     if (req.url === '/esbuild')
  //       return clients.push(
  //         res.writeHead(200, {
  //           'Content-Type': 'text/event-stream',
  //           'Cache-Control': 'no-cache',
  //           Connection: 'keep-alive',
  //         })
  //       )
  //     const path = ~url.split('/').pop().indexOf('.') ? url : `/index.html` //for PWA with router
  //     req.pipe(
  //       request({ hostname: 'localhost', port: 8000, path, method, headers }, (prxRes) => {
  //         res.writeHead(prxRes.statusCode, prxRes.headers)
  //         prxRes.pipe(res, { end: true })
  //       }),
  //       { end: true }
  //     )
  //   }).listen(3000)
  
  //   setTimeout(() => {
  //     const op = { darwin: ['open'], linux: ['xdg-open'], win32: ['cmd', '/c', 'start'] }
  //     const ptf = process.platform
  //     if (clients.length === 0) spawn(op[ptf][0], [...[op[ptf].slice(1)], `http://localhost:8000`])
  //   }, 1000) //open the default browser only if it is not opened yet
  // })