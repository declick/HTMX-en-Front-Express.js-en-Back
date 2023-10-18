const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 9300;

app.use(cors());
app.use(express.urlencoded({extended: false}));
app.use(express.json());

const messages = [
    {
        id: 1,
        text: 'Hello World',    
    },
    {
        id: 2,
        text: 'By World',
    },
]

let products = [
    {
        id: 1,
        name: 'iphone',    
    },
    {
        id: 2,
        name: 'ipad',
    },
    {
        id: 3,
        name: 'android phone',    
    },
    {
        id: 4,
        name: 'android tablet',
    },
]

app.get('/messages',  (req, res) => {
    res.json(messages);
});

app.get('/products',  (req, res) => {
    console.log(req.query);
    const nameFromQuery = req.query?.productname || '';
    if (nameFromQuery === '') {
        return res.json(products);
    }
    const result = products.filter((p) => 
        p.name.toLocaleLowerCase().includes(nameFromQuery.toLocaleLowerCase())
    )
    res.json(result);
});

app.post('/products', (req, res) => {
    console.log(req.body);
    const name = req.body?.productname;
    const id = Date.now();
    products = [{id, name}, ...products];
    res.json({msg: `success ${id} created`}).status(201);
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
});