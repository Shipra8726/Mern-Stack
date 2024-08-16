const express = require('express');
const Model = require('../models/usermodel');

const router = express.Router();
//add
router.post('/add', ( req, res) =>{
    console.log(req.body);

    new Model(req.body).save()
    .then((result) => {
        res.status(200).json(result);
    }).catch((err) => {
        console.log(err);
     res.status(500).json(err);
    });
});
//get all
router.get('/get all', ( req, res) =>{
     
    Model.find()
    .then((result) => {
        res.status(200).json(result);
    }).catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.get('/getbyemail/:email',(req, res) =>{
    Model.findOne({email: req.params.email})
    .then((result) => {
        res.status(200).json(result);
    }).catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
});

//getbycity
router.get('/getbycity/:city',(req, res) =>{
    Model.find({city: req.params.city})
    .then((result) => {
        res.status(200).json(result);
    }).catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
});
//: denote URL parameter
router.get('./getbyid/:id',(req,res) =>{
    Model.findbyid(req.params.id)
    .then((result) => {
        res.status(200).json(result);
    }).catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });

});

router.delete('./delete/:id',(req,res) => {
    Model.findByIdAndDelete(req.params.id)
    .then((result)   => {
        res.status(200).json(result);
    }).catch((err) => {
        console.log(err);
        res.status(500).json(err);
        
        
    });
})






//delete
router.get('/delete', ( req, res) =>{
    res.send('Delete the response');
});
//update
router.get('/update', ( req, res) =>{
    res.send('Update the response');
});
// : denotes url parameter 
router.get('/getbyid/:id', ( req, res) =>{
    console.log(req.params.id);
    
    res.send('get the response by getbyid');
});

module.exports = router;