//api.js

const API_KEY = '?key=M8EENBP3M95KW9APAGC9X5238';
const BASE_URL = 'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/';

async function getWeather(city) {
	const response = await fetch(BASE_URL + city + API_KEY);
	
	if (!response.ok) throw new Error('Weather request failed');
	
	const data = await response.json();
	
	return data;
}

export { getWeather };
