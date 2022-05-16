const router = require('express').Router();
router.get('/note/note-form',(req,res)=>{
    res.render('note-form');
});
module.exports = router;