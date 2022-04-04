const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');

// Initialization
const app = express();

// settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', exphbs({
    defaultLayout: 'main',
    layaoutDir: ,
    partialsDir: ,
    extname: 
}));


// middlewares

// global variables

// routes

// static files

// server is listenning

app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
});

