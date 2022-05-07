import express from 'express'
import nodemailer from 'nodemailer'
import { prisma } from './prisma'
const app = express()

require('dotenv').config()

const PORT = 3333

app.use(express.json())

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: process.env.USER,
      pass: process.env.PASSWORD
    }
});



app.post('/feedbacks', async (req, res) => {
    const { type, comment, screenshot } = req.body

    const feedback = await prisma.feedback.create({
        data: {
            type,
            comment,
            screenshot
        }
    })

    await transport.sendMail({
        from: "Equipe Feedget <team@feedget.com>",
        to: 'Matheus Sousa <matheus5068sousa@gmail.com>',
        subject: 'New feedback',
        html: [
            `<p>Tipo do feedback: ${type}</p>`,
            `<p>Comentário: ${comment}</p>`,
        ].join('\n')
    })

    return res.status(201).json({ data: feedback })
})

app.listen(PORT, () => {
    console.log(`Server is running at port ${PORT}`)
})