import nodemailer from 'nodemailer'
import dotenv from 'dotenv'
import nodemailerSendgrid from 'nodemailer-sendgrid'

dotenv.config()

const creatTrans = () => {
  const transport = nodemailer.createTransport(
    nodemailerSendgrid({
      apiKey: process.env.SENDGRID_KEY,
    }),
  )

  return transport
}

export const sendMail = async (user) => {
  const transporter = creatTrans()

  await transporter.sendMail({
    from: `"Book You 📚" <info@bookyou.com>`,
    to: `${user.email}`,
    subject: `wellcome ${user.name}`,
    html: 'Hello friend',
  })
}
