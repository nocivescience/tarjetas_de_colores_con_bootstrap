const mongoose=require('mongoose');
const URI='mongodb://localhost/notesdb';
mongoose.connect(URI)
    .then(db=>console.log('DB is connected'))
    .catch(err=>console.log(err));