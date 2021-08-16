const { verifyUserId } = require('../services/auth.service')

module.exports = {
  authenticate: async (req, res, next) => {
    try {
      const { authToken } = req.cookies
      const userId = verifyUserId(authToken)
      req.userId = userId
      next()
    } catch (error) {
      res.status(401).send('Unauthorized')
    }
  }
}
