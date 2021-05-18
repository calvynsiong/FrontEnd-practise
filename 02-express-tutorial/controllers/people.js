let { people } = require('../data');



const getPeople = (req, res) => {
	res.status(200).json({ success: true, data: people });
};

const createPerson = (req, res) => {
	const { name } = req.body;
	if (!name) {
		return res
			.status(401)
			.json({ success: false, msg: 'Please provide a valid name' });
	}
	res.status(201).send({ success: true, person: name });
};

const createPersonPostman = (req, res) => {
	const { name } = req.body;
	if (!name) {
		return res
			.status(401)
			.json({ success: false, msg: 'Please provide a valid name' });
	}
	res.status(201).send({ success: true, data: [...people, name] });
};

const updatePerson = (req, res) => {
	const { id } = req.params;
	const { name } = req.body;

	// ! Check if person exists by checking if the id is present

	const person = people.find((person) => {
		return person.id === Number(id);
	});

	if (!person) {
		return res
			.status(404)
			.json({ success: false, msg: `No person with id ${id}` });
	}

	const newPeople = people.map((person) => {
		if (person.id === Number(id)) {
			person.name = name;
		}
		return person;
	});
	res.status(201).json({ success: true, data: newPeople });
};

const deletePerson = (req, res) => {
	const { id } = req.params;
	// const { name } = req.body;

	// ! Check if person exists by checking if the id is present

	const person = people.find((person) => {
		return person.id === Number(id);
	});

	if (!person) {
		return res
			.status(404)
			.json({ success: false, msg: `No person with id ${id}` });
	}

	const newPeople = people.filter((person) => person.id !== Number(id));
	return res.status(201).json({ success: true, data: newPeople });
};

module.exports = {
	getPeople,
	createPerson,
	createPersonPostman,
	updatePerson,
	deletePerson,
};
