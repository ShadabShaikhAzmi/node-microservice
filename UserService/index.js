const express = require('express');
const app = express();
const port = 3001;


app.get('/users', (req, res) => {
    res.json({
        message: 'List of users from User Service'
    });
});

app.get('*', (req, res) => {
    res.status(404).json({
        "error": "Not Found"
    });
});

app.listen(port, () => {
    console.log(`User Service listening at http://localhost:${port}`);
});