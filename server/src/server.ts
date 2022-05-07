import express from 'express'
import { routes } from './routes'
const app = express()

require('dotenv').config()

const PORT = 3333

app.use(express.json())
app.use(routes)




app.listen(PORT, () => {
    console.log(`Server is running at port ${PORT}`)
})