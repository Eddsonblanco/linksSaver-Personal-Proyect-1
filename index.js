const express = require('express');

//initializations
const app = express();

//settings
app.set( 'port', process.env.PORT || 4000);

//Middleware
// app.use(morga('dev'));


//global variables



// routes



// public


// Starting the server

app.listen(app.get('port'), () => {
    console.log('server on port', app.get('port'));
})