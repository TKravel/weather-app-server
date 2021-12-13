require('dotenv').config();
const express = require('express');
const axios = require('axios');
const cors = require('cors');
const PORT = 3001;

const app = express();

const corsOptions = {
	origin: 'https://eloquent-bardeen-6340b4.netlify.app',
	methods: ['POST'],
	allowedHeaders: ['Content-Type', 'Authorization'],
};

app.use(express.json());
app.use(cors(corsOptions));

app.options('/getData', cors());
app.post('/getData', (req, res) => {
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
			// handle success
			if (response.data.error) {
				console.log('erRoR: ' + response.data.error);
				res.send(response.data.error);
			} else {
				res.send(response.data);
			}
		})
		.catch((error) => {
			// handle error
			console.log(error);
			res.send(error);
		})
		.then(() => {
			// always executed
		});
});

app.listen(PORT, () => {
	console.log('Server running on ' + PORT);
});
