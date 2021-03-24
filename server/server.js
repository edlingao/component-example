import express from 'express'
import path from 'path'

const app = express()
const __dirname = path.resolve(process.cwd(), '.')
const port = 3000

app.use(express.json())
app.use(express.static(`${__dirname}/dist`))

app.get('/', (req, res) => {
    // console.log(path.join(`${__dirname}/dist/index.html`))
    res.sendFile(path.join(`${__dirname}/dist/index.html`))
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})