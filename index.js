const express = require('express');
const httpProxy = require('http-proxy');
const Microservice = require('./microservice');

const app = express();
const proxy = httpProxy.createProxyServer();

const gatewayPort = 3000;

app.use('/users', (req, res) => {
    proxy.web(req, res, { target: Microservice.user });
});

app.use('/products', (req, res) => {
    proxy.web(req, res, { target: Microservice.product });
});

app.get('*', (req, res) => {
    res.status(404).json({
        "error": "Not Found"
    });
});

proxy.on('error', (err, req, res) => {
    res.status(500).json({
        "error": "Proxy Error"
    });
});

app.listen(gatewayPort, () => {
    console.log(Microservice);
    console.log(`Gateway running at http://localhost:${gatewayPort}`);
});