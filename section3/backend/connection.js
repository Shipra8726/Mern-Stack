const mongoose = require('mongoose');

const url ="mongodb+srv://shiprasinghhh:riya8726@cluster0.knzy6.mongodb.net/mydatabase?retryWrites=true&w=majority&appName=Cluster0"

//connect to the database

//asynchronous - returns a promise
mongoose.connect(url)
.then((result) => {
    console.log('connected to database');
})
.catch((err) => {
    console.log(err);
       
});

module.exports = mongoose;