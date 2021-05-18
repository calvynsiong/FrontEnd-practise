const express = require('express');
const router = express.Router();
const {
	getPeople,
	createPerson,
	createPersonPostman,
	updatePerson,
	deletePerson,
} = require('../controllers/people');

// router.get('/', getPeople);
// // ! Post requests

// router.post('/', createPerson);
// router.post('/postman', createPersonPostman);

// // ! Put requests
// router.put('/:id', updatePerson);

// // ! Delete requests

// router.delete('/:id', deletePerson);

router.route('/').get(getPeople).post(createPerson);
router.route('/postman').post(createPersonPostman);
router.route('/:id').put(updatePerson).delete(deletePerson);

module.exports = router;
