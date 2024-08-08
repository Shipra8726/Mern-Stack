const express = require('express');

const router = express.Router();
//add
router.post('/add', ( req, res) =>{
    res.send('Response from user add');
});
//get all
router.get('/get all', ( req, res) =>{
    res.send('Get all the response');
});
//delete
router.get('/delete', ( req, res) =>{
    res.send('Delete the response');
});
//update
router.get('/update', ( req, res) =>{
    res.send('Update the response');
});

module.exports = router;