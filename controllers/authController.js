const User = require('../models/user')
const jwt = require('jsonwebtoken')


const test = (req, res) => {
    res.json('test is working');
}

const loginUser = async (req, res) => {
    try {
        console.log(123)
        const { email, password } = req.body;
        //user exist
        const user = await User.findOne({ email });

        if (!user) {
            return res.json({
                error: 'No user found'
            })
        }
        //check password
        const match = user.password.localeCompare(password)
        if (match != -1) {
            res.send(user)
        }
        else {
            res.json("Not match")
        }

    } catch (error) {
        console.log(error)
    }
}

const getProfile = (req, res) => {
    const { token } = req.cookies
    if (token) {
        jwt.verify(token, process.env.JWT_SECRET, {}, (err, user) => {
            console.log(user)
            if (err) throw err;
            res.json(user)
        })
    }
    else {
        res.json(null)
    }
}



module.exports = {
    test, loginUser, getProfile
}

