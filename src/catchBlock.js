const icons = require.context('../icons', false, /\.png$/); 

export function drawError() {
    bigCloud.style.display = 'none';
    smallCloud.style.display = 'none';

    cityName.textContent = '';
    date.textContent = '';

    icon.src = icons('./sad-cloud.png');
    description.textContent = 'Sorry, city not found ';

    temperature.textContent = '';
    feelsLike.textContent = '';
    humidity.textContent = '';

    day1.textContent = '';
    icon1.src = icons('./no-data.png');
    description1.textContent = '';
    maxTemp1.textContent = '';
    minTemp1.textContent = '';
    humidity1.textContent = '';

    day2.textContent = '';
    icon2.src = icons('./no-data.png');
    description2.textContent = '';
    maxTemp2.textContent = '';
    minTemp2.textContent = '';
    humidity2.textContent = '';

    day3.textContent = '';
    icon3.src = icons('./no-data.png');
    description3.textContent = '';
    maxTemp3.textContent = '';
    minTemp3.textContent = '';
    humidity3.textContent = '';
}