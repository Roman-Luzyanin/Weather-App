//events.js

import { getWeather } from '../logic/api.js';
import { getWeatherData, setWeatherData } from '../logic/weather.js';
import { renderWeather, renderLoader, renderError } from './render.js';

const searchForm = document.querySelector('.search');
const searchInput = document.querySelector('.search input');
const degreeSwitch = document.getElementById('checkbox');

const getUnits = () => document.getElementById('checkbox').checked ? 'F' : 'C';

function capitalize(str) {
  return str
    .toLowerCase() 
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

function initEvents() {
	searchForm.addEventListener('submit', async (e) => {
		e.preventDefault();
		renderLoader();
		const query = capitalize(searchInput.value);
		
		try {
			const data = await getWeather(query);
			setWeatherData(data);
			const weather = getWeatherData(getUnits());
			renderWeather(weather);
			searchInput.value = '';
			
		} catch {
			renderError();
			
		} finally {
			document.querySelector('.loading').classList.remove('visible');
		}
	});
	
	degreeSwitch.addEventListener('change', (e) => {
		const data = getWeatherData(getUnits());
		if (data) renderWeather(data);
	});
}

export { initEvents };
