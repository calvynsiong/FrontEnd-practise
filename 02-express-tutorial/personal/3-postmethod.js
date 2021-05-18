const express = require('express');
const app = express();
let { people } = require('./data');

app.use(express.static('./methods-public'));
// ! Allows for data to be parsed and then stored in req.body
app.use(express.urlencoded({ extended: false }));
// ! Allows for json to be parsed
app.use(express.json());

app.get('/api/people', (req, res) => {
	res.status(200).json({ success: true, data: people });
});

app.post('/api/people', (req, res) => {
	const { name } = req.body;
	if (!name) {
		return res
			.status(401)
			.json({ success: false, msg: 'Please provide a valid name' });
	}
	res.status(201).send({ success: true, person: name });
});

app.post('/login', (req, res) => {
	console.log(req.body);
	const { name } = req.body;
	if (name) {
		return res.status(200).send(`Welcome ${name}`);
	}
	res.status(401).send('Please Provide Credentials');
});

app.listen(5000, () => {
	console.log(`Server started on 5000`);
});
