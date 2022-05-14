const express=require('express');
const router=express.Router();
const Note=require('../models/model');
router.get('/',async(req,res)=>{
    const notes=await Note.find();
    res.json(notes);
});
router.post('/',async(req,res)=>{
    const {title,description}=req.body;
    const newNote=new Note({
        title,
        description
    });
    const note=await newNote.save();
    res.json(note);
});
router.put('/:id',async(req,res)=>{
    const {title,description}=req.body;
    const note=await Note.findByIdAndUpdate(req.params.id,{
        title,
        description
    },{new:true});
    res.json(note);
});
router.delete('/:id',async(req,res)=>{
    await Note.findByIdAndRemove(req.params.id);
    res.json({message:'Note deleted'});
});
module.exports=router;