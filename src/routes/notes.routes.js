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
router.post('/notes/new-note', async(req, res) => {
    const { title, content } = req.body;
    const newNote = new Note({
        title,
        content
    });
    await newNote.save();
    res.json({
        status: 'Note Saved'
    });
});
router.put('/notes/update-note/:id', async(req, res) => {
    const { title, content } = req.body;
    await Note.findByIdAndUpdate(req.params.id, {
        title,
        content
    });
    res.json({
        status: 'Note Updated'
    });
});
router.delete('/notes/delete-note/:id', async(req, res) => {
    await Note.findByIdAndRemove(req.params.id);
    res.json({
        status: 'Note Deleted'
    });
});
module.exports = router;