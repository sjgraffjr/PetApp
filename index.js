const express = require('express');
const app = express();
const petController = require('./controllers/pet')
const bodyParser = require('body-parser');
require('./db/db')


app.set('view engine','ejs');
app.set('views',__dirname + '/views');

app.use(bodyParser.urlencoded({extended: false}));

app.use('/pets', petController)//name space for all the routes = '/'

app.listen(3000,()=>{
	console.log('I am listening on port 3000')
})