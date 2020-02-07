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

router.post('/', async (req, res)=>{
    let post = new PostModel({
        title:  req.body.title, 
        author: req.body.author,
        body:   req.body.body
    })
    try{

        let savedPost = await post.save()
        res.json(savedPost)

    }catch(err){

        res.json({message: err})

    }
})

router.delete('/:postId', async (req, res)=>{
    try{
        let deletedPost = await PostModel.remove({
            _id: req.params.postId
        })
        res.json(deletedPost)
    }catch(err){
        res.json({message: err})
    }
    
})


module.exports = router