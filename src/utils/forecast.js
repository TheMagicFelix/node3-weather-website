const request = require('request');

const forecast = (latitude, longitude, callback) => {
	const url =
		'http://api.weatherstack.com/current?access_key=7d50c3abb2130bfe187d93668b30057e&query=' +
		latitude +
		',' +
		longitude +
		'&units=m';
	request({ url, json: true }, (error, { body }) => {
		if (error) {
			callback('Unable to connect to weather service.', undefined);
		} else if (body.error) {
			callback('Unable to find location.', undefined);
		} else {
			callback(
				undefined,
				body.current.weather_descriptions[0] +
					' throught the day' +
					'. The current temperature is ' +
					body.current.temperature +
					' degrees out. It feels like ' +
					body.current.feelslike +
					' degrees. ' +
					'And there is a ' +
					body.current.precip +
					'% chance of rain.'
			);
		}
	});
};

module.exports = forecast;
