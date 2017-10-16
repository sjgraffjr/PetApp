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
router.get('/new', (req,res)=>{
	res.render('new',{})
})
router.post('/', (req,res)=>{
	Pet.create(req.body,(err,pet)=>{
		if(err){
			res.send('Error')
		}else{
			res.redirect('/pets')
		}
	})
})

module.exports = router;