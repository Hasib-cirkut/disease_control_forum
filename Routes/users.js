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

router.get('/byuser/:username', async (req, res)=>{
    try{
        let data = await UserModel.find({username: req.params.username})

        data[0].password = ''

        res.json(data)
    }catch(err){
        res.json({message: err})
    }
})

router.get('/bypost/:username', async (req, res)=>{
    try{
        let data = await UserModel.find({username: req.params.username})
        
        data[0].password = ''
        
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
            password,
            type: "general"
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

    let receivedData = await UserModel.find({username})


    if(receivedData.length === 0){
        res.json({message: 'nouserfound'})
    }else{
        if(receivedData[0].password !== password){
            res.json({message: 'passworddoesnotmatch'})
        }else{

            let tempUserData = {name, username, work, location, joined, bio, profession, email} = receivedData[0]
    

            res.json(
                {message: 'userfound', data: tempUserData})
        }
    }
})

router.post('/updateprofile', async (req, res)=>{

    console.log(req.body);
    

    let {name, username, location, work, bio, email, profession} = req.body;
    
    let reData  = await UserModel.update(
        {username: username},
        {
            $set: {
                name: name,
                username: username,
                location: location,
                work: work,
                bio: bio,
                email: email,
                profession: profession
            }
        }
    )

    res.json(reData)
    
})


module.exports = router