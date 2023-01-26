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
      user: 'baaa4e1294db2a',
      pass: 'd45867fd72fdb0',
    },
  })

  return transport
}

export const sendMailNewUser = async (user) => {
  console.log('email', user)
  const transporter = creatTrans()

  await transporter.sendMail({
    from: `"Book You 📚" <info@bookyou.com>`,
    to: `${user.email}`,
    subject: `wellcome ${user.name}`,
    html: templateWelcome(user.name),
  })
}

export const sendMailNewBook = async (book, user) => {
  const transporter = creatTrans()

  await transporter.sendMail({
    from: `"Book You 📚" <info@bookyou.com>`,
    to: `${user.email}`,
    subject: `${user.name} created a new book: ${book.title}`,
    html: `este es mi libro ${book.title}`,
  })
}

// export const SendMailnewComment = async (book) => {
//   const transporter = creatTrans()

//   await transporter.sendMail({
//     from: `"Book You 📚" <info@bookyou.com> `,
//     to: `${ user.email } `,
//     subject: `Hey ${ user.name }, there are new comments about your book`,
//     html: ``,
//   })
// }
