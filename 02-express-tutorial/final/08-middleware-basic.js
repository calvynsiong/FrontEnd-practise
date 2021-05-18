const express = require('express')
const app = express()

//  req => middleware => res

const logger = (req, res, next) => {
  const method = req.method
  const url = req.url
  const time = new Date().getFullYear()
  console.log(method, url, time)
  next()
}

app.get('/', logger, (req, res) => {
  res.send('Home')
})
app.get('/about', logger, (req, res) => {
  res.send('About')
})

app.listen(5000, () => {
  console.log('Server is listening on port 5000....')
})

// ! Middleware advanced
const express = require('express');
const app = express();
const logger = require('./logger');
const authorize = require('./authorize');
const morgan = require("morgan") 


// ! req => middleware => res

// app.use([logger, authorize]);

app.use(morgan("tiny"));

app.get('/', (req, res) => {
	return res.send('Home');
});

app.get('/about', (req, res) => {
	return res.send('About');
});
app.get('/products', (req, res) => {
	return res.send('Products');
});
app.get('/items', (req, res) => {
	return res.send('Items');
});

app.all('*', (req, res) => {
	return res.status(404).send('<h1>Error</h1>');
});

app.listen(5000, () => {
	console.log(`Server started on 5000`);
});
