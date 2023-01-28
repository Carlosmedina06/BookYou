import MercadoPago from 'mercadopago'

MercadoPago.configure({
  access_token: process.env.accesstokenvendedor,
})

export const createSubscription = async (req, res) => { }
