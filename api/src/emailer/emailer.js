import nodemailer from 'nodemailer'
import dotenv from 'dotenv'
// import nodemailerSendgrid from 'nodemailer-sendgrid'

import { templateWelcome } from './templateWelcome.js'
import { templateNewBook } from './templateNewBook.js'
import { templateNewComment } from './templateNewComment.js'

dotenv.config()

const creatTrans = () => {
  const transport = nodemailer.createTransport({
    host: 'sandbox.smtp.mailtrap.io',
    port: 2525,
    auth: {
      user: '96cea2640c9e09',
      pass: 'ffc4cc5aa679bc',
    },
    // const transport = nodemailer.createTransport({
    //   // mailtrap de carlos
    //   // host: 'smtp.mailtrap.io',
    //   // port: 2525,
    //   // auth: {
    //   //   user: 'baaa4e1294db2a',
    //   //   pass: 'd45867fd72fdb0',
    //   // mailtrap de andres
    //   host: 'smtp.mailtrap.io',
    //   port: 2525,
    //   auth: {
    //     user: '6a9235ed0dc342',
    //     pass: '4a97d7e4aab7a9',
    //   },
    // })
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

export const sendMailNewBook = async (book, user) => {
  const transporter = creatTrans()

  await transporter.sendMail({
    from: `"Book You 📚" <info@bookyou.com>`,
    to: `${user.email}`,
    subject: `${user.name} created a new book: ${book.title}`,
    html: templateNewBook(book.title),
  })
}

export const SendMailnewComment = async (book, newComment) => {
  const transporter = creatTrans()

  await transporter.sendMail({
    from: `"Book You 📚" <info@bookyou.com> `,
    to: `${book.user.username}`,
    subject: `Hey ${book.author}, there are new comments about your book`,
    html: templateNewComment(book, newComment),
  })
}
