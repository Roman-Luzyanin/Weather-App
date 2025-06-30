export function isDay(data) {
    const dayStart = data.currentConditions.sunrise;
    const dayEnd = data.currentConditions.sunset;
    const currentPoint = data.currentConditions.datetime;

    const start = Number(dayStart.slice(0,2) * 3600 + dayStart.slice(3,5) * 60 + dayStart.slice(6));
    const end = Number(dayEnd.slice(0,2) * 3600 + dayEnd.slice(3,5) * 60 + dayEnd.slice(6));
    const now = Number(currentPoint.slice(0,2) * 3600 + currentPoint.slice(3,5) * 60 + currentPoint.slice(6));

    const result = (now >= start && now < end) ? true : false;

    return result;
}