import veact from 'veact'
import { readFileSync } from 'fs'
import { resolve } from 'path'

const css = readFileSync(
  resolve(__dirname, '../../node_modules/reeeset/dist/reeeset.css')
).toString()

const extraCSS = `
  * {
    box-sizing: border-box
  }
`

const view = veact()

const { style } = view.els()

view.render(() =>
  style(css),
  style(extraCSS)
)

export default view()
