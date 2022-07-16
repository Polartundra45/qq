const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
	res.send('its still working i am amazing bro yo');
});

app.get('/about', (req,res) => {
	res.send('this is the about page')
})

app.listen(port, () => {
	console.log(`listening of port ${port}`);
});