const router = require('express').Router();
router.get('/note/note-form',(req,res)=>{
    res.render('note-form');
});
router.get('/note/all-notes',(req,res)=>{
    res.render('all-notes');
});
module.exports = router;