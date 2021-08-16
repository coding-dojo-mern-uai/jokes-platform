const { Router } = require('express')

const router = Router()

/* Rutas principales */
router.use('/jokes', require('./jokes'))
router.use('/auth', require('./auth'))

module.exports = router
