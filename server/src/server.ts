import express from 'express'
import cors from 'cors'
import { routes } from './routes'

const app = express()


const PORT = 3333

app.use(express.json())
app.use(routes)
app.use(cors({
    origin: 'http://localhost:3333'
}))



app.listen(PORT, () => {
    console.log(`Server is running at port ${PORT}`)
})