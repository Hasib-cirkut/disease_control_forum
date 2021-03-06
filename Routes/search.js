const express = require('express')
const router = express.Router()
const PostModel = require('../Models/Post')

router.get('/posts/:key',async (req, res)=>{


    
    let reData = await PostModel.find({
        tags : {
            $regex: `${req.params.key}`, $options: 'i'
        }
    })
    
    
    res.json(reData)
})


module.exports = router