//render.js

const city = document.querySelector('.location h2');
const date = document.querySelector('.location p');
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

const image = document.querySelector('.description img');
const title = document.querySelector('.description p');
const images = import.meta.webpackContext('../assets/images', {
  recursive: false,
  regExp: /\.(svg|png)$/,
});

const temperature = document.querySelector('.currentWeather h2');
const description = document.querySelector('.currentWeather p');

const forecast = document.querySelectorAll('.forecast > div');
const delimiter = document.querySelector('.delimiter');
const weatherApp = document.querySelector('.weatherApp');

async function renderWeather(data) {
	await data;
	const localeDate = new Date(data.currentConditions.datetimeEpoch * 1000);
	city.textContent = data.resolvedAddress.split(',')[0];
	date.textContent = localeDate.toLocaleDateString('en-GB', options);
	
	image.src = images(`./${data.currentConditions.icon}.svg`);
	title.textContent = (data.currentConditions.icon.slice(0,1).toUpperCase() + 
											 data.currentConditions.icon.slice(1)).replaceAll('-', ' ');
	
	temperature.textContent = data.currentConditions.temp + (data.celsius ? ' \u00B0C' : ' \u00B0F');
	description.textContent = data.description;

	forecast.forEach((div, i) => {
		const localeDate = new Date(data.days[i].datetimeEpoch * 1000)
		div.querySelector('p').textContent = localeDate.toLocaleDateString('en-GB', options);
		div.querySelector('img').src = images(`./${data.days[i].icon}.svg`);
		
		div.querySelectorAll('.temp p').forEach((p, idx) => {
			if (idx === 2) p.textContent = (data.days[i].icon.slice(0,1).toUpperCase() + 
																			data.days[i].icon.slice(1)).replaceAll('-', ' ');
																			
			else if (idx === 1) p.textContent = 
							'Max: ' + data.days[i].tempmax + (data.celsius ? ' \u00B0C' : ' \u00B0F');
							
			else if (idx === 0) p.textContent = 
							'Min: ' + data.days[i].tempmin + (data.celsius ? ' \u00B0C' : ' \u00B0F');
		});
	});
	
	delimiter.classList.add('visible');
	isDay(data) ? weatherApp.classList.remove('night') : weatherApp.classList.add('night');
}

function isDay(data) {
	const sunrise = data.currentConditions.sunrise;
	const sunset = data.currentConditions.sunset;
	const datetime = data.currentConditions.datetime;
	
	return datetime > sunrise && datetime < sunset;
}

function resetInfo() {
	const weather = document.querySelectorAll('.weather h2, .weather p, .weather img');
	const forecast = document.querySelectorAll('.forecast p, .forecast img');
	delimiter.classList.remove('visible');
	
	[...weather, ...forecast].forEach(el => {
		if (el.tagName === 'IMG') el.src = '';
		else el.textContent = '';
	});
}

function renderLoader() {
	resetInfo();
	document.querySelector('.loading').classList.add('visible');
}

function renderError() {
	resetInfo();
	image.src = images('./sad-cloud.png');
  title.textContent = 'Sorry, city not found ';
  
}

export { renderWeather, renderLoader, renderError };
