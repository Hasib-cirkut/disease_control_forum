const express = require('express')
const router = express.Router()
const CommentModel = require('../Models/Comment.js')

router.get('/:post_id', async (req, res)=>{
    let reData = await CommentModel.find({
        post_id: req.params.post_id
    })

    res.json(reData)
})

router.post('/', async (req, res)=>{
    let {author, body, post_id} = req.body

    let comment = new CommentModel({
        author, body, post_id
    })

    let reData = await comment.save()

    res.json(reData)
})


module.exports = router