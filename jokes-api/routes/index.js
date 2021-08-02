const { Router } = require('express')

const router = Router()

/* Rutas principales */
router.use('/jokes', require('./jokes'))

module.exports = router
