const express = require('express');

const router = express.Router();
//add
router.get('/add', ( req, res) =>{
    res.send('Response from product add');
});
//get all
router.get('/get all', ( req, res) =>{
    res.send('Get all the response from product');
});
//delete
router.get('/delete', ( req, res) =>{
    res.send('Delete the response from product');
});
//update
router.get('/update', ( req, res) =>{
    res.send('Update the response from product');
});
//getbyid
router.get('/getbyid', ( req, res) =>{
    res.send('get the response from product by getbyid');
});

module.exports = router;