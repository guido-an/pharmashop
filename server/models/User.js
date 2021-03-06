const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
  email: { type: String, required: true },
  telephone: String,
  VAT: String,
  province: String,
  password: { type: String, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  shippingInfo: Object,
  billingAddress: String,
  orders: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Order' }],
  resetToken: String,
  admin: Boolean
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
})

const User = mongoose.model('User', userSchema)
module.exports = User
