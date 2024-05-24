const express = require('express')
const registerUser = require('../../../controllers/user/register/registerUser')
const userVerifyAccount = require('../../../controllers/user/user-verify-account/userVerifyAccount')
const userLogin = require('../../../controllers/user/login/userLogin')
const router = express.Router()


router.post('/register',registerUser)
router.get('/verify/account',userVerifyAccount)
router.post('/login',userLogin)

module.exports = router