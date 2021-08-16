const { Router } = require('express')

const authController = require('../controllers/auth.controller')
const { authenticate } = require('../config/jwt.config')

const router = Router()

// Primer parámetro: ruta
// N - parametros: funciones
router.post('/login', authController.login)
router.post('/register', authController.register)
router.post('/logout', authenticate, authController.logout)

router.get('/me', authenticate, authController.getMe)

module.exports = router
