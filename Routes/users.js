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

        let {name, username, email, password} = req.body
    
        let user = new UserModel({
            name,
            username,
            email,
            age: '',
            profession: '',
            password
        })

        let receivedData = await UserModel.find({username})

        if(receivedData.length === 0){
            try{
                let savedUser = await user.save()
                res.json({
                    message: 'useradded'
                })
            }catch(err){
                res.json({message: err})
            }
        }else{
            res.json({message: 'usernametaken'})
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