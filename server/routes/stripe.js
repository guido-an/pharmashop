const express = require('express')
const router = express.Router()
const Product = require('../models/Product')

// This is a sample test API key. Sign in to see examples pre-filled with your key.
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)

const calculateOrderAmount = async items => {
  let totalPrice = 0
  try {
    // with forEach doesn't work
    for (let i = 0; i < items.length; i++) {
      const product = await Product.findById({ _id: items[i]._id })
      const productPrice = product.price * items[i].boughtQuantity
      totalPrice = totalPrice + productPrice
    }
    const number = totalPrice * 100
    const rounded = Math.round(number * 10) / 10
    return rounded
  } catch (e) {
    console.log(e)
  }
}

router.post('/create-payment-intent', async (req, res) => {
  const { items } = req.body
  // Create a PaymentIntent with the order amount and currency
  const paymentIntent = await stripe.paymentIntents.create({
    amount: await calculateOrderAmount(items),
    currency: 'eur'
  })
  res.send({
    clientSecret: paymentIntent.client_secret
  })
})

module.exports = router
