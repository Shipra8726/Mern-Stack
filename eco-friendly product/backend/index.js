//importing express
const express = require('express');
const UserRouter = require('./routers/productrouters');
const ProductRouter = require('./routers/productrouter');
const cors = require('cors');
//initializing express
const app = express();
const port = 5000;

//middleware
app.use(cors({
    origin: 'http://localhost:3000'
}));
app.use(express.json())
app.use('/user', productrouter);

//route or endpoint
app.get('/', (req, res) => {
    res.send('responce from express');
});

app.get('/add', (req, res) => {
    res.send('response from add');
})
app.get('/getall', (req, res) => {
    res.send('response from getall');
})
app.get('/upadte', (req, res) => {
    res.send('response from update');
})

app.listen(port, () => { console.log('server started') });