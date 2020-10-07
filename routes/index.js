const express = require('express');
const router = express.Router();
const bodyparser = require('body-parser');

const messages = [
	{
		text: 'Hi there!',
		user: 'Amando',
		added: new Date(),
	},
	{
		text: 'Hello World!',
		user: 'Charles',
		added: new Date(),
	},
];

/* GET home page. */
router.get('/', function (req, res, next) {
	res.render('index', { title: 'Mini Messageboard', messages: messages });
});

/* GET new page. */
router.get('/new', (req, res, next) => {
	res.render('form');
});

/* POST new page */
router.post('/new', (req, res, next) => {
	messages.push({
		user: req.body.user,
		text: req.body.message,
		added: new Date().toLocaleString(),
	});
	res.redirect('/');
});

module.exports = router;
