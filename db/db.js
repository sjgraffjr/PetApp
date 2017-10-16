const mongoose = require('mongoose');
const connectionString = 'mongodb://localhost/pets';
mongoose.connect(connectionString);
console.log('file being run')
mongoose.connection.on('connected', ()=>{
	console.log('mongoose connection to ' + connectionString)
})

mongoose.connection.on('error', ()=>{
	console.log('mongoose connection to ' + error)
})

mongoose.connection.on('disconnected', ()=>{
	console.log('mongoose disconnected')
})