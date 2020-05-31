const express = require('express');
const router = express.Router();
const burger = require('../models/burger');

 
router.get('/', (req,res) => {
    burger.selectAllBurgers(function(finalResult){
        res.render('index', {finalResult});
    });
})

router.post('/', (req,res) => {
    const userInput = req.body.burger
    burger.passToDbForInsert(userInput, function(){
        console.log('Successfully insert!');
        res.status(200).redirect('/');
    })
})

//Update

router.put('/', (req,res) => {
    const devouredBurgerID = req.body.id;
    burger.passToDbForUpdate(devouredBurgerID, function(){
        console.log('Update complete!');
        res.json({
            status: 202,
            message: 'Devoured!'
        })
    })
});

router.delete('/', (req,res) => {
    const devouredBurgerID = req.body.id;
    burger.passToDbForDelete(devouredBurgerID, function(){
        console.log('Delete complete!');
        res.json({
            status: 202,
            message: 'Toss!'
        })
    })
})

module.exports = router;