const express = require('express');
const morgan = require('morgan');
const exphbs = require('express-handlebars');
const path = require('path')

//initializations
const app = express();

//settings
app.set( 'port', process.env.PORT || 4000);
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', exphbs({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs',
    helpers: require('./src/lib/handlebars')  
}));
app.set('view engine', '.hbs');

//Middleware
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

//global variables
app.use((req,res,next) =>{
    next();
})



// routes
app.use(require('./src/routes/index.js'));
app.use(require('./src/routes/authentication.js'));
app.use(require('./src/routes/links.js'));



// public

app.use(express.static(path.join(__dirname, 'public')));


// Starting the server
// webkwebkw

app.listen(app.get('port'), () => {
    console.log('server on port', app.get('port'));
})