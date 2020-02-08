const express = require('express')

const router = express.Router()

const UserModel = require('../Models/Users')

router.get('/', async (req, res)=>{
    try{
        let data = await UserModel.find()
        res.json(data)
    }catch(err){
        res.json({message: err})
    }
})

router.post('/addUser', async (req, res)=>{
    
        let user = new UserModel({
            name: req.body.name,
            username: req.body.username,
            email: req.body.email,
            age: '',
            profession: '',
            password: req.body.password
        })
    try{
        let savedUser = await user.save()
        res.json(savedUser)
    }catch(err){
        res.json({message: err})
    }
})


router.post('/login', async (req, res)=>{

    let username = req.body.username;
    let password = req.body.password;

    console.log('here');
    

    let receivedData = await UserModel.find({username})


    if(receivedData.length === 0){
        res.json({message: 'nouserfound'})
    }else{
        if(receivedData[0].password !== password){
            res.json({message: 'passworddoesnotmatch'})
        }else{
            res.json({message: 'userfound'})
        }
    }
    
    res.end()
})


module.exports = router