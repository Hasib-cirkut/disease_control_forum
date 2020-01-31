const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')


const postRoute = require('./Routes/posts')

//middleWare

app.use(express.json())
app.use('/posts', postRoute)
app.use(express.urlencoded({
    extended: false
}))
app.use(cors())


//conncecing to db

mongoose.connect('mongodb://localhost:27017/cseFEdb', { useNewUrlParser: true })

mongoose.connection.once('open', ()=>{
    console.log('database connection has been made');
})

app.listen('3000', ()=>{
    console.log('backend is listening to port 3000');
})