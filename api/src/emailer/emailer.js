import nodemailer from 'nodemailer'
import dotenv from 'dotenv'
// import nodemailerSendgrid from 'nodemailer-sendgrid'

import { templateWelcome } from './templateWelcome.js'

dotenv.config()

const creatTrans = () => {
  // const transport = nodemailer.createTransport(
  //   nodemailerSendgrid({
  //     apiKey: process.env.SENDGRID_KEY,
  //   }),
  // )
  const transport = nodemailer.createTransport({
    host: 'smtp.mailtrap.io',
    port: 2525,
    auth: {
      user: '6a9235ed0dc342',
      pass: '4a97d7e4aab7a9',
    },
  })

  return transport
}

export const sendMailNewUser = async (user) => {
  const transporter = creatTrans()

  await transporter.sendMail({
    from: `"Book You 📚" <info@bookyou.com>`,
    to: `${user.email}`,
    subject: `wellcome ${user.name}`,
    html: templateWelcome(user.name),
  })
}

// export const SendMailnewComment = async (book) => {
//   const transporter = creatTrans()

//   await transporter.sendMail({
//     from: `"Book You 📚" <info@bookyou.com>`,
//     to: `${user.email}`,
//     subject: `Hey ${user.name}, there are new comments about your book`,
//     html: ``,
//   })
// }
