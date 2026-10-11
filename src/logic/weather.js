//weather.js

let weatherData = null;

function toCelsius(f) {
	return ((f - 32) * 5/9).toFixed(1);
}

function setWeatherData(data) {
	weatherData = data;
}

function getWeatherData(units) {
	if (!weatherData) return false;
	
	const data = structuredClone(weatherData);
	
	if (units === 'C') {
		data.currentConditions.temp = toCelsius(data.currentConditions.temp);
		
		for (let i = 0; i < 3; i++) {
			data.days[i].tempmax = toCelsius(data.days[i].tempmax);
			data.days[i].tempmin = toCelsius(data.days[i].tempmin);
		}
		
		data.celsius = true;
		return data;
		
	} else {
		data.celsius = false;
		return data;
	}
}

export { setWeatherData, getWeatherData }
