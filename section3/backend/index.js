//importing express
const express = require('express');
const UserRouter = require('./routers/userrouter');
const Productrouter = require('./routers/productrouter');

//initializing express
const app = express();
const port = 5000;

//middleware
app.use('/user', UserRouter);
app.use('/product', Productrouter);


//route or endpoint
app.get('/', (req , res) =>{
    res.send('Response from express');
});

app.get('/add', (req , res) =>{
    res.send('Response from add');
});
//getall
app.get('/getall', (req , res) =>{
    res.send('Get All the data');
});
//update
app.get('/update', (req , res) =>{
    res.send('Update the Response');
});
app.listen( port, () => {console.log( 'server started')});

