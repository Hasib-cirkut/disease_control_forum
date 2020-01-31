const express = require('express')
const app = express()
const cors = require('cors')


//middleWare
app.use(express.json())
app.use(express.urlencoded({
    extended: false
}))
app.use(cors())

app.listen('3000', ()=>{
    console.log('backend is listening to port 3000');
})