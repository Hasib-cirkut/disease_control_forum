const express = require('express')

const router = express.Router()

const PostModel = require('../Models/Post')


router.get('/', async (req, res)=>{
    try{
        let data = await PostModel.find()
        res.json(data)
    }catch(err){
        res.json({message: err})
    }
})

router.get('/byuser/:username', async (req, res)=>{
    try{
        let data = await PostModel.find({author: req.params.username})
        res.json(data)
    }catch(err){
        res.json({message: err})
    }
})

router.get('/:id', async (req, res)=>{
    try{
        let rePost = await PostModel.find({
            _id: req.params.id
        })
        res.json(rePost)
    }catch(err){
        res.json({message: err})
    }
})


router.post('/addpost', async (req, res)=>{
    let {title, tags, body, user} = req.body

    let post = new PostModel({
        title,
        author: user,
        body,
        likes: 0,
        tags
    })

    try{
        let savedPost = await post.save()
        
        res.json({message: 'postadded'})
        
    }catch(err){
        res.json({message: err})
    }
    
})

router.delete('/delete/:postId', async (req, res)=>{
    try{
        let deletedPost = await PostModel.remove({
            _id: req.params.postId
        })
        res.json({message: 'deleted'})
    }catch(err){
        res.json({message: err})
    }
})


module.exports = router