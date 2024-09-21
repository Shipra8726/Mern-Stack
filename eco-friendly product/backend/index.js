//importing express
const express = require('express');
const userRouter = require('./routers/userRouter')
const productrouter = require('./routers/productRouter')
const cors = require('cors');
//initializing express
const app = express();
const port = 5000;

//middleware
app.use(cors({
    origin: '*'
}));
app.use(express.json())
app.use('/user', userRouter);
app.use('/product', productrouter);

//route or endpoint
app.get('/', (req, res) => {
    res.send('responce from express');
});

app.listen(port, () => { console.log('server started') });