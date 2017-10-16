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
//creating new page and pet form
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

//edit page

router.get('/:id/edit',(req,res) =>{
	Pet.findById(req.params.id, (err,pet)=>{
		res.render('edit',{pet: pet})
	})
})
router.put('/:id', (req,res)=>{
	Pet.findByIdAndUpdate(req.params.id, req.body, (err,pet)=>{
		res.redirect('/pets')
	})
})

//show page

router.get('/:id', (req,res)=>{
	Pet.findById(req.params.id, (err,pet)=>{
		res.render('show', {pet:pet})
	})
})














module.exports = router;