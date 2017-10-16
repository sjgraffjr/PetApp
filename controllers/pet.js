const express = require('express');
const router = express.Router();
const Pet = require('../models/pet')

router.get('/',(req,res)=>{
	Pet.find((err,pets)=>{
		res.render('index', {
			pets: pets
		})	
	})
	
	
})

module.exports = router;