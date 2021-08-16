const Mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const UserSchema = new Mongoose.Schema(
  {
    email: { type: String, unique: true },
    password: { type: String }
  },
  { timestamp: true }
)

UserSchema.virtual('confirmPassword')

// Validar confirmPassword === password
// Encriptar la contraseña

UserSchema.pre('validate', function (next) {
  if (this.password !== this.confirmPassword) this.invalidate('confirmPassword', 'Passwords dont match')
  next()
})

// PRE: Save, callback
UserSchema.pre('save', async function (next) {
  try {
    const hash = await bcrypt.hash(this.password, 10)
    this.password = hash
    next()
  } catch (error) {
    next()
  }
})

module.exports = Mongoose.model('User', UserSchema)
