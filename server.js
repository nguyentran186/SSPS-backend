const express = require('express');
const dotenv = require('dotenv').config();
const cors = require('cors')
const { mongoose } = require('mongoose')
const app = express();
const cookieParser = require('cookie-parser')

//db connection
mongoose.connect('mongodb+srv://nguyentran186:tkbd1752003@printer-db.3x2fjj1.mongodb.net/?retryWrites=true&w=majority')
    .then(() => console.log('DB connected'))
    .catch((err) => console.log('DB not connected', err))



app.use(express.json())
app.use(cookieParser())
app.use(express.urlencoded({ extended: false }))


app.use('/', require('./routes/authRoutes'))

const port = 3500;
app.listen(port, () => console.log(`Server is running on port ${port}`));
