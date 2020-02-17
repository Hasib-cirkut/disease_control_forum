const express = require('express')
const app = express()
const cors = require('cors')
app.use(cors())

const mongoose = require('mongoose')
const cookieParser = require('cookie-parser')
app.use(cookieParser())

const postRoute = require('./Routes/posts')
const userRoute = require('./Routes/users')

//middleWare

app.use(express.json())
app.use('/posts', postRoute)
app.use('/users', userRoute)
app.use(express.urlencoded({
    extended: false
}))


//conncecing to db

mongoose.connect('mongodb://localhost:27017/cseFEdb', { useNewUrlParser: true })

mongoose.connection.once('open', ()=>{
    console.log('database connection has been made');
})

app.listen('3000', ()=>{
    console.log('backend is listening to port 3000');
})