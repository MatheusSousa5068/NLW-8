import express from "express";
import nodemailer from "nodemailer";
import { prisma } from "./prisma";
import { PrismaFeedbacksRepository } from "./repositories/prisma/prisma-feedback-repository";
import { SubmitFeedbackUseCase } from "./use-cases/submit-feedbackk-use-case";

export const routes = express.Router();

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: process.env.USER,
        pass: process.env.PASSWORD,
    },
});

routes.post("/feedbacks", async (req, res) => {
    const { type, comment, screenshot } = req.body;

    const prismaFeedbacksRepository = new PrismaFeedbacksRepository();
    const submitFeedbackUseCase = new SubmitFeedbackUseCase(
        prismaFeedbacksRepository
    );


    await submitFeedbackUseCase.execute({
        type,
        comment,
        screenshot
    })
    /*
    await transport.sendMail({
        from: "Equipe Feedget <team@feedget.com>",
        to: 'Matheus Sousa <matheus5068sousa@gmail.com>',
        subject: 'New feedback',
        html: [
            `<p>Tipo do feedback: ${type}</p>`,
            `<p>Comentário: ${comment}</p>`,
        ].join('\n')
    })
*/
    return res.status(201).send();
});
