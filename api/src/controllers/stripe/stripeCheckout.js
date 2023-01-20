import Stripe from 'stripe'
import dotenv from 'dotenv'
dotenv.config()

const stripe = Stripe(process.env.STRIPE)

const stripeCheckout = async (req, res) => {
  const { amount, id, email } = req.body

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: 'USD',
      customer: id,
      payment_method_types: ['card'],
      receipt_email: email,
    })

    const subscriptions = await stripe.subscriptions.create({
      customer: id,
      items: [{ price: paymentIntent.amount }],
      paymentIntent: paymentIntent.id,
    })

    // eslint-disable-next-line no-console
    console.log(subscriptions)
    // eslint-disable-next-line no-console
    console.log(paymentIntent)
  } catch (error) {
    res.json({ error: error.message })
  }
}

export default stripeCheckout
