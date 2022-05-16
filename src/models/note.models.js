const {Schema,model} = require('mongoose');
const NoteSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    }
});
module.exports = model('Note', NoteSchema);