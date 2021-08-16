const jwt = require('jsonwebtoken')

module.exports = {
  // SECRET es un dato sensible
  getAuthToken: (userId) => jwt.sign({ userId }, 'codingdojo'),
  verifyUserId: (token) => {
    const { userId } = jwt.verify(token, 'codingdojo')
    return userId
  }
}
