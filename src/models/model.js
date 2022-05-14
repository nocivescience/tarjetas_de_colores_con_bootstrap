const mongoose=require('mongoose');
const {Schema}=mongoose;
const NoteSchema=new Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
});
module.exports=mongoose.model('Note',NoteSchema);
// Compare this snippet from src\routes\note.routes.js: