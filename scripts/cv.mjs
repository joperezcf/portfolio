import { execFile } from 'node:child_process'
import { existsSync } from 'node:fs'
import { promisify } from 'node:util'
import { build, preview } from 'vite'

const CHROME = process.env.CHROME_PATH ?? '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'
const OUTPUT = 'public/Jose-Orlando-CV.pdf'

if (!existsSync(CHROME)) {
  console.error(`Chrome not found at ${CHROME}. Set CHROME_PATH to your Chrome binary.`)
  process.exit(1)
}

await build({ logLevel: 'warn' })
const server = await preview({ preview: { port: 4179, strictPort: true } })

try {
  await promisify(execFile)(CHROME, [
    '--headless=new',
    '--disable-gpu',
    '--no-pdf-header-footer',
    '--virtual-time-budget=5000',
    `--print-to-pdf=${OUTPUT}`,
    'http://localhost:4179/cv.html',
  ])
  console.log(`CV written to ${OUTPUT}`)
} finally {
  await new Promise(resolve => server.httpServer.close(resolve))
}
