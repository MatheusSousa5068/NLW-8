import express from 'express'
import { prisma } from './prisma'
const app = express()

const PORT = 3333

app.use(express.json())


app.post('/feedbacks', async (req, res) => {
    const { type, comment, screenshot } = req.body

    const feedback = await prisma.feedback.create({
        data: {
            type,
            comment,
            screenshot
        }
    })

    return res.status(201).json({ data: feedback })
})

app.listen(PORT, () => {
    console.log(`Server is running at port ${PORT}`)
})