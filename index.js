const express = require('express');
const app = express();
const petController = require('./controllers/pet')
require('./db/db')

app.set('view engine','ejs');
app.set('views',__dirname + '/views');

app.use('/pets', petController)

app.listen(3000,()=>{
	console.log('I am listening on port 3000')
})