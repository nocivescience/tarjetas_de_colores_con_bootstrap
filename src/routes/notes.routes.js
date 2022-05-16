const router = require('express').Router();
const Note = require('../models/note.models');
//render all notes
router.get('/', (req, res) => {
    res.render('index');
});
router.get('/notes/all-notes', async(req, res) => {
    const notes = await Note.find();
    console.log(notes);
    res.json(notes);
});
router.get('/notes/new-note', (req, res) => {
    res.render('about');
});
router.get('/edit', (req, res) => {
    res.render('edit');
});
module.exports = router;