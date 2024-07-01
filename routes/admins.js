const router = require('express').Router()
const controller = require('../controllers/auth')
const middleware = require('../middleware')


router.get(
  '/admin',
  middleware.stripToken,
  middleware.verifyToken,
  roleCheck(['admin']),
  controller.getItems

)