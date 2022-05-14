const express=require('express');
const path=require('path');
const {create}=require('express-handlebars');
const {mongoose}=require('./database');
const app=express();
const morgan=require('morgan');
//settings
app.set('port',process.env.PORT||3000);
app.set('views',path.join(__dirname,
    'client'));
app.engine('.hbs',create({
    defaultLayout:'main',
    layoutsDir:path.join(app.get('views'),
        'layouts'),
    partialsDir:path.join(app.get('views'),
        'partials'),
    extname:'.hbs',
    }).engine
);
app.set('view engine','hbs');
//middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}));
app.use(express.json());
//routes
app.use('/api/notes',require('./routes/note.routes'));
//static files
app.use(express.static(path.join(__dirname,'public')));
//starting the server
app.listen(app.get('port'),()=>{
    console.log('Server on port',app.get('port'));
});