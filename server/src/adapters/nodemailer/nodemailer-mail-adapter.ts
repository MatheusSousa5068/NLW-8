import { MailAdapter, SendMailData } from "../mail-adapter";
import nodemailer from "nodemailer";

require('dotenv').config()

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: process.env.USER,
        pass: process.env.PASSWORD,
    },
});

export class NodemailerMailAdapter implements MailAdapter {
    async sendMail({subject, body}: SendMailData) {
        await transport.sendMail({
            from: "Equipe Feedget <team@feedget.com>",
            to: "Matheus Sousa <matheus5068sousa@gmail.com>",
            subject,

            html: body
        });
    }
}
