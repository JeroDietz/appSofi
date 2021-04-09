const express = require('express');
const app = express();
const path = require('path');

const methodOverride = require('method-override');
let port = 3000;

const homeRouter = require('./router/indexRouter')

app.use(express.json())
app.use(express.urlencoded({ extended:true }));
app.use(methodOverride('_method'));
app.use(express.static(path.join(__dirname, '../public')));

app.use('/', homeRouter);

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');



app.listen(port, function(){
    console.log('http://localhost:'+ port);
});