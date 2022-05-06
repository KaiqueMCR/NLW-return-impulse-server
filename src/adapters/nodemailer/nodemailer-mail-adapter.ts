import nodemailer from 'nodemailer'
import { MailAdapter, SendEmailData } from "../mail-adapter";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "92fb3cffc8f2e6",
    pass: "e2466a4f7a4ec1"
  }
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({ subject, body }: SendEmailData) {
    await transport.sendMail({
        from: "Equipe Feedget <oi@feedget.com>",
        to: "Kaique Matheus <kaiquedev404@gmail.com>",
        subject,
        html: body,
    })
  };
}