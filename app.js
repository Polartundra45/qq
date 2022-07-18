const express = require('express');
const app = express();
const path = require('path');
const port = 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
	res.render('home');
});

app.get('/sign_up', (req,res) => {
	res.render('sign-up-page');
});

app.listen(port, () => {
	console.log(`listening of port ${port}`);
});