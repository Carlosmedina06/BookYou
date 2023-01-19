import Stripe from 'stripe'

const stripe = Stripe(process.env.STRIPE_SECRET_KEY)

const stripeCheckout = async (req, res) => {
  console.log(stripe)
  res.status(200).json({ message: 'Working Stripe Checkout' })
}

export default stripeCheckout
