const express = require('express');
const morgan = require('morgan');
const app = express();

app.use(morgan('dev'));

app.listen(3001, () => {
	console.log('Listening on port 3001');
});

app.get('/test', (req, res) => {
	res.status(200).send({
		message: 'api is working fine',
	});
});
