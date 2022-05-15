const router = require('express').Router();
const Note = require('../models/note.models');
//render all notes
router.get('/', async function(req, res) {
    try {
        const notes = await Note.find({});
        res.render('notes', { notes });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});
//render a single note
router.get('/:id', async function(req, res) {
    try {
        const note = await Note.findById(req.params.id);
        res.render('note', { note });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});
//create a new note
router.post('/', async function(req, res) {
    try {
        const note = new Note({
            title: req.body.title,
            content: req.body.content
        });
        await note.save();
        res.redirect('/notes');
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});
//update a note
router.put('/:id', async function(req, res) {
    try {
        const note = await Note.findByIdAndUpdate(req.params.id, {
            title: req.body.title,
            content: req.body.content
        });
        res.redirect('/notes');
        res.json({ note });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});