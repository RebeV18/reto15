require('dotenv').config();
const express = require('express');
const app = express();
const productsRouter = require('./routes/product.route');

app.use(express.json());

app.use('/products', productsRouter);

app.get('/', (req, res) => {
    res.send('Hola mundo');
})

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Servidor ${port} levantado`);                                                                                                                                                                                                                  
})