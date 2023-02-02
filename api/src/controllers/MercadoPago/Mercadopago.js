import axios from 'axios'
import jwt from 'jsonwebtoken'

import User from '../../models/User.js'

export const createPago = async (req, res) => {
  try {
    const authorization = req.get('authorization')

    if (!authorization) return res.status(401).json({ error: 'token missing' })
    if (authorization.length <= 7) {
      res.status(401).json('token missing')
    }
    if (authorization && authorization.toLowerCase().startsWith('bearer ')) {
      const token = authorization.substring(7)
      const decodedToken = jwt.verify(token, process.env.SECRET)

      if (!token || !decodedToken.id) {
        return res.status(401).json({ error: 'token missing or invalid' })
      }

      const user = await User.findById(decodedToken.id)

      if (!user) return res.status(404).json({ error: 'user not found' })
      if (user.subscription === 'premium')
        return res.status(400).json({ error: 'user already has premium subscription' })
      axios
        .post(
          'https://api.mercadopago.com/checkout/preferences',
          {
            payer_email: 'test_user_1297280127@testuser.com',
            items: [
              {
                title: 'Subscripcion Bookyou',
                description: 'suscripcion premium bookyou',
                quantity: 1,
                unit_price: 385,
              },
            ],
            auto_return: 'all',

            back_urls: {
              success: 'https://book-you-rho.vercel.app/#/success',
              fallure: 'http://www.fallure.com',
              pending: 'http://www.pending.com',
            },
            payment_method_id: ['visa', 'master'],
            notification_url: 'google.com',
          },
          {
            headers: {
              'Content-Type': 'application/json',
              Authorization:
                'Bearer APP_USR-4642588959898882-012810-9f836e105db2800e19910fb8093a8eab-1297278676',
            },
          },
        )
        .then((response) => {
          res.send(response.data)
        })
    }
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log({ error: error.message })
  }
}
