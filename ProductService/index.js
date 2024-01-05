const express = require('express');
const app = express();
const port =  3002;

app.get('/products', (req, res) => {
    res.json({
        message: 'List of products from Product Service'
    });
});

app.get('*', (req, res) => {
    res.status(404).json({
        "error": "Not Found"
    });
});

app.listen(port, () => {
    console.log(`Product Service listening at http://localhost:${port}`);
});
