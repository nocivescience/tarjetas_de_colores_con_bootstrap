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
export default model('Note', NoteSchema);