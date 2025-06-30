export function tempUnit() {
    if (cityName.textContent === '') return;
    const data = JSON.parse(localStorage.getItem('data'));

    if (!checkbox.checked) {
        temperature.textContent = ((data.currentConditions.temp - 32) * 5 / 9).toFixed(1) + ' \u00B0C';
        feelsLike.textContent = 'Feels like: ' + ((data.currentConditions.feelslike - 32) * 5 / 9).toFixed(1) + ' \u00B0C';

        maxTemp1.textContent = 'Max: ' + ((data.days[1].tempmax - 32) * 5 / 9).toFixed(1) + ' \u00B0C';
        minTemp1.textContent = 'Min: ' + ((data.days[1].tempmin - 32) * 5 / 9).toFixed(1) + ' \u00B0C';

        maxTemp2.textContent = 'Max: ' + ((data.days[2].tempmax - 32) * 5 / 9).toFixed(1) + ' \u00B0C';
        minTemp2.textContent = 'Min: ' + ((data.days[2].tempmin - 32) * 5 / 9).toFixed(1) + ' \u00B0C';

        maxTemp3.textContent = 'Max: ' + ((data.days[3].tempmax - 32) * 5 / 9).toFixed(1) + ' \u00B0C';
        minTemp3.textContent = 'Min: ' + ((data.days[3].tempmin - 32) * 5 / 9).toFixed(1) + ' \u00B0C';
    } else {
        temperature.textContent = data.currentConditions.temp + ' \u00B0F';
        feelsLike.textContent = 'Feels like: ' + data.currentConditions.feelslike + ' \u00B0F';

        maxTemp1.textContent = 'Max: ' + data.days[1].tempmax + ' \u00B0F';
        minTemp1.textContent = 'Min: ' + data.days[1].tempmin + ' \u00B0F';

        maxTemp2.textContent = 'Max: ' + data.days[2].tempmax + ' \u00B0F';
        minTemp2.textContent = 'Min: ' + data.days[2].tempmin + ' \u00B0F';

        maxTemp3.textContent = 'Max: ' + data.days[3].tempmax + ' \u00B0F';
        minTemp3.textContent = 'Min: ' + data.days[3].tempmin + ' \u00B0F';
    }
}