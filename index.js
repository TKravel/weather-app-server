require('dotenv').config();
const express = require('express');
const axios = require('axios');
const cors = require('cors');
const PORT = process.env.PORT || 3001;

const app = express();

const corsOptions = {
	origin: [
		'https://eloquent-bardeen-6340b4.netlify.app',
		'http://localhost:3000',
	],
	methods: ['POST'],
	preflightContinue: true,
	optionsSuccessStatus: 204,
};

app.use(express.json());
app.use(cors(corsOptions));

app.options('/getData', cors(corsOptions));
app.post('/getData', cors(corsOptions), (req, res) => {
	console.log('test');
	const search = req.body.userLocation;
	console.log(search);

	if (search === '' || search === undefined) {
		return;
	}

	axios
		.get(
			`http://api.weatherapi.com/v1/forecast.json?key=${process.env.WEATHER_KEY}&q=${search}&days=3&aqi=no&alerts=yes`
		)
		.then((response) => {
			res.send(response.data);
		})
		.catch((error) => {
			res.status(400).json({ msg: error.response.statusText });
		})
		.then(() => {
			console.log('Request received');
		});
});

app.listen(PORT, () => {
	console.log('Server running on ' + PORT);
});
