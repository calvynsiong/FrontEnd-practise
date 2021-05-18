const express = require('express');
const app = express();
const logger = require("./logger")


// ! req => middleware => res

app.use(logger);


app.get('/', (req, res) => {
	res.send('Home');
});

app.get('/about', (req, res) => {
	res.send('About');
});
app.get('/products', (req, res) => {
	res.send('Products');
});
app.get('/items', (req, res) => {
	res.send('Items');
});

app.all('*', (req, res) => {
	res.status(404).send('<h1>Error</h1>');
});

app.listen(5000, () => {
	console.log(`Server started on 5000`);
});
