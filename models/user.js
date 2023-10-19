const mongoose = require('mongoose');
const {Schema} = mongoose;

const userSchema = new Schema({
    name: String,
    email: {
        type: String,
        unique: true
    },
    password: String,
    is_admin: Boolean,
    img_source: String, 
})

const UserModel = mongoose.model('user', userSchema)

module.exports = UserModel