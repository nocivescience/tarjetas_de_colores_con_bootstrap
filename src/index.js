const express=require('express');
const path=require('path');
const {mongoose}=require('./database');
const app=express();
const morgan=require('morgan');
//settings
app.set('port',process.env.PORT||3000);
//middlewares
app.use(morgan('dev'));
app.use(express.json());
//routes
app.use('/api/notes',require('./routes/note.routes'));
//static files
app.use(express.static(path.join(__dirname,'public')));
//starting the server
app.listen(app.get('port'),()=>{
    console.log('Server on port',app.get('port'));
});