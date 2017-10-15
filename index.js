const express = require('express');
const app = express();
// const bodyParser = require('body-parser');
// require('./db/db');
// const petController = require('./controllers/pet');
// const methodOverride = require('method-override');

// app.set('view engine','ejs');
// app.set('views',__dirname + '/views');

// app.use(bodyParser.urlencoded({extended: false}));
// app.use(express.static('public'));
// app.use(methodOverride('_method'));
// app.use('/pet',petController);
// app.get('/', (request, response) => {
//  response.send('Hi Im the information the server has sent to the client')
//  });
app.get('/pet',(req,res) =>{
	res.json({
		"pet name": "Angel",
		"age": 3,
		"color": "brown",
		"potty-trained": true
	})
})
app.listen(3000,()=>{
	console.log('I am listening on port 3000')
})