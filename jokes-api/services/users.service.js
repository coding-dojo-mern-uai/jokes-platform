const User = require('../models/User')
const bcrypt = require('bcrypt')

module.exports = {
  createUser: async (credentials) => {
    const user = new User(credentials)
    console.log(user)
    return await user.save()
  },
  getUser: async (userId) => {
    // POJO
    const user = await User.findOne({ _id: userId })
    return user
  },
  verifyUser: async (credentials) => {
    const user = await User.findOne({ email: credentials.email })

    if (!user) return false

    const correctPassword = await bcrypt.compare(credentials.password, user.password)

    if (!correctPassword) return false

    return user
  }
}
