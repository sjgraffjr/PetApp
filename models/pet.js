const mongoose = require('mongoose');
const PetSchema = new mongoose.Schema({
	name: String,
	type: String,
	age: Number,
	color: String
})
module.exports = mongoose.model('Pet',PetSchema)

