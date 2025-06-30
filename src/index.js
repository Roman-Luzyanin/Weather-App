import "./styles.css"
import { format } from 'date-fns'
import { drawError } from './catchBlock'
import { isDay } from './isDay'
import { tempUnit } from "./tempUnit"
const icons = require.context('../icons', false, /\.svg$/); 

checkbox.addEventListener('change', ()=> tempUnit());
window.addEventListener('load', ()=> localStorage.clear());
window.addEventListener('keydown', (e) => e.key === "Enter" ? searchBtn.click() : '');

searchBtn.addEventListener('click', () => {
    const data = JSON.parse(localStorage.getItem('data'));
    const cityName = localStorage.getItem('cityName');
    if (input.value === '' || input.value === cityName) {
        input.value = '';
        return;
    }
    localStorage.setItem('cityName', input.value);
    getData();  
    input.value = '';
    data === null || isDay(data)  ? loading.classList.add('black') : loading.classList.add('white');
});
    
async function getData() {
    try{
        const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${input.value}?key=M8EENBP3M95KW9APAGC9X5238`);
        const data = await response.json();
        console.log(data)
        localStorage.setItem('data', JSON.stringify(data));
        displayData();
    } catch (e) {
        loading.className = '';
        drawError();
    } 
}

function displayData() {
        loading.className = '';
        const data = JSON.parse(localStorage.getItem('data'));

        isDay(data) ? weatherApp.className = 'day' : weatherApp.className = 'night';
        footer.style.display = 'flex';
        bigCloud.style.display = 'none';
        smallCloud.style.display = 'none';

        cityName.textContent = data.resolvedAddress;
        date.textContent = format(new Date(), 'PPPP').slice(0, -6);

        icon.src = icons(`./${data.currentConditions.icon}.svg`);
        description.textContent = (data.currentConditions.icon.slice(0,1).toUpperCase() + data.currentConditions.icon.slice(1)).replaceAll('-', ' ');
        
        tempUnit();
        humidity.textContent = 'Humidity: ' + data.currentConditions.humidity + ' %';

        day1.textContent = format(new Date(data.days[1].datetime), 'PPPP').slice(0, -6);
        icon1.src = icons(`./${data.days[1].icon}.svg`);
        description1.textContent = (data.days[1].icon.slice(0,1).toUpperCase() + data.days[1].icon.slice(1)).replaceAll('-', ' ');
        humidity1.textContent = 'Humidity: ' + data.days[1].humidity + ' %';

        day2.textContent = format(new Date(data.days[2].datetime), 'PPPP').slice(0, -6);
        icon2.src = icons(`./${data.days[2].icon}.svg`);
        description2.textContent = (data.days[2].icon.slice(0,1).toUpperCase() + data.days[2].icon.slice(1)).replaceAll('-', ' ');
        humidity2.textContent = 'Humidity: ' + data.days[2].humidity + ' %';

        day3.textContent = format(new Date(data.days[3].datetime), 'PPPP').slice(0, -6);
        icon3.src = icons(`./${data.days[3].icon}.svg`);
        description3.textContent = (data.days[3].icon.slice(0,1).toUpperCase() + data.days[3].icon.slice(1)).replaceAll('-', ' ');
        humidity3.textContent = 'Humidity: ' + data.days[3].humidity + ' %';
}

