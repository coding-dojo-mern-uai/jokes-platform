const usersService = require('../services/users.service')
const authService = require('../services/auth.service')

module.exports = {
  login: async ({ body }, res) => {
    const user = await usersService.verifyUser(body)

    if (!user) return res.status(400).send('Email and/or password dont match')

    const authToken = authService.getAuthToken(user._id)

    res.cookie('authToken', authToken, { httpOnly: true }).json({ authToken })
  },
  register: async ({ body }, res) => {
    try {
      const user = await usersService.createUser(body)
      const authToken = authService.getAuthToken(user._id)
      res.cookie('authToken', authToken, { httpOnly: true }).json({ authToken })
    } catch (error) {
      res.status(400).send(error)
    }
  },
  getMe: async ({ userId }, res) => {
    try {
      const { email } = await usersService.getUser(userId)
      res.send({ email })
    } catch (error) {
      res.status(404).send('User not found')
    }
  },
  logout: (req, res) => {
    res.clearCookie('authToken')
    res.sendStatus(200)
  }
}
