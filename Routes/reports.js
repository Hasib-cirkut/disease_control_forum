const express = require('express')
const router = express.Router()
const ReportModel = require('../Models/Report.js')

router.get('/allReport', async (req, res)=>{
    let savedPost = await ReportModel.find({})

    if(savedPost.length === 0){
        res.json({
            message: 'noreportfound'
        })
    }else{
        res.json(savedPost)
    }
})

router.post('/submitReport', async (req, res)=>{
    let {post_id, description, title} = req.body;

    console.log(req.body)

    let report = new ReportModel({
        post_id,
        title,
        description
    })

    try{
        let savedPost = await report.save()
        
        res.json({message: 'reportsubmitted'})
        
    }catch(err){
        res.json({message: err})
    }
})

router.delete('/:id', async (req, res)=>{
    
    try{
        let deletedPost = await ReportModel.remove({
            _id: req.params.id
        })
        res.json({message: 'deleted'})
    }catch(err){
        res.json({message: err})
    }
})

router.delete('/deleteMany/:post_id', async (req, res)=>{
    
    try{
        let deletedPost = await ReportModel.deleteMany({
            post_id: req.params.post_id
        })
        res.json({message: 'many deleted'})
    }catch(err){
        res.json({message: err})
    }
})


module.exports = router