require('dotenv').config();
const express = require('express');
const axios = require('axios');
const PORT = 3001;

const app = express();

app.use(express.json());

app.post('/getData', (req, res) => {
	console.log('test');
	const locationSearch = req.body.userLocation;
	console.log(locationSearch);

	// axios
	// 	.get(
	// 		`http://api.weatherapi.com/v1/current.json?key=${process.env.WEATHER_KEY}&q=18901`
	// 	)
	// 	.then((response) => {
	// 		// handle success
	// 		console.log(response.data);
	// 		res.send(response.data);
	// 	})
	// 	.catch((error) => {
	// 		// handle error
	// 		console.log(error);
	// 	})
	// 	.then(() => {
	// 		// always executed
	// 	});
});

app.listen(PORT, () => {
	console.log('Server running on ' + PORT);
});
