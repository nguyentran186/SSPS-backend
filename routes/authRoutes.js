const express = require('express');
const router = express.Router();
const cors = require('cors');
const { test, loginUser, getProfile } = require('../controllers/authController')

// middleware
router.use(
    cors({
        credentials: true,
        origin: 'http://localhost:3000'
    })
)

router.get('/', test)
router.post('/login', loginUser)
router.get('/profile', getProfile)


module.exports = router