const express = require('express');
const app = express();
const { products, people } = require('./data');

app.get('/', (req, res) => {
	res.send(`<h1>Home Page</h1> <a href="/api/products">Products</a>`);
});

// app.get('/api/products', (req, res) => {
// 	const newProds = products.map((product) => {
// 		const { id, name, image } = product;
// 		return { id, name, image };
// 	});
// 	res.json(newProds);
// });

// ! passing a number parameter

app.get('/api/products/productID=:productID', (req, res) => {
	console.log(req.params);
	const newProds = products.map((product) => {
		const { id, name, image } = product;
		return { id, name, image };
	});
	const { productID } = req.params;
	const singleProd = newProds.find((product) => {
		return product.id === Number(productID);
	});
	if (!singleProd) {
		res.status(404).send(' <h1>Error</h1> ');
	}

	res.json(singleProd);
});

// ! Creating a query that searchs based on the first letter and limit

app.get('/api/v1/query', (req, res) => {
	console.log(req.query);

	// Getting the 2 key values from the request
	const { search, limit } = req.query;
	let sortedProds = [...products];

	if (search) {
		sortedProds = sortedProds.filter((item) => {
			return item.name.startsWith(search);
		});
	}
	if (limit) {
		sortedProds = sortedProds.slice(0, Number(limit));
	}
	// ! Common procedure to show data is empty + search is successful || return is necessary to only send 1 response per request
	if (sortedProds.length < 1) {
		return res.status(200).json({success: true, data: {}});
	}
	return res.status(200).json(sortedProds);
});

app.listen(5000, () => {
	console.log(`Server started on 5000`);
});
