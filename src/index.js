import moment from 'moment';
import './style.css';

const dayWeather = [
    { code: '1000', weather: 'Clear-Day'},
    { code: '1003', weather: 'Cloudy-Day'},
    { code: '1006', weather: 'Cloudy-Day'},
    { code: '1009', weather: 'Overcast-Day'},
    { code: '1030', weather: 'Fog-Day'},
    { code: '1063', weather: 'Light-Rain-Day'},
    { code: '1066', weather: 'Light-Snow-Day'},
    { code: '1069', weather: 'Light-Rain-Day'},
    { code: '1072', weather: 'Light-Rain-Day'},
    { code: '1087', weather: 'Thunderstorm-Day'},
    { code: '1114', weather: 'Heavy-Snow-Day'},
    { code: '1117', weather: 'Heavy-Snow-Day'},
    { code: '1135', weather: 'Fog-Day'},
    { code: '1147', weather: 'Fog-Day'},
    { code: '1150', weather: 'Light-Rain-Day'},
    { code: '1153', weather: 'Light-Rain-Day'},
    { code: '1168', weather: 'Light-Rain-Day'},
    { code: '1171', weather: 'Heavy-Rain-Day'},
    { code: '1180', weather: 'Light-Rain-Day'},
    { code: '1183', weather: 'Light-Rain-Day'},
    { code: '1186', weather: 'Light-Rain-Day'},
    { code: '1189', weather: 'Light-Rain-Day'},
    { code: '1192', weather: 'Heavy-Rain-Day'},
    { code: '1195', weather: 'Heavy-Rain-Day'},
    { code: '1198', weather: 'Light-Rain-Day'},
    { code: '1201', weather: 'Heavy-Rain-Day'},
    { code: '1204', weather: 'Light-Rain-Day'},
    { code: '1207', weather: 'Heavy-Rain-Day'},
    { code: '1210', weather: 'Light-Snow-Day'},
    { code: '1213', weather: 'Light-Snow-Day'},
    { code: '1216', weather: 'Light-Snow-Day'},
    { code: '1219', weather: 'Light-Snow-Day'},
    { code: '1222', weather: 'Heavy-Snow-Day'},
    { code: '1225', weather: 'Heavy-Snow-Day'},
    { code: '1237', weather: 'Light-Rain-Day'},
    { code: '1240', weather: 'Light-Rain-Day'},
    { code: '1243', weather: 'Heavy-Rain-Day'},
    { code: '1246', weather: 'Heavy-Rain-Day'},
    { code: '1249', weather: 'Light-Rain-Day'},
    { code: '1252', weather: 'Heavy-Rain-Day'},
    { code: '1255', weather: 'Light-Snow-Day'},
    { code: '1258', weather: 'Heavy-Snow-Day'},
    { code: '1261', weather: 'Light-Rain-Day'},
    { code: '1264', weather: 'Heavy-Snow-Day'},
    { code: '1273', weather: 'Thunderstorm-Day'},
    { code: '1276', weather: 'Thunderstorm-Day'},
    { code: '1279', weather: 'Light-Snow-Day'},
    { code: '1282', weather: 'Heavy-Snow-Day'}    
];

const nightWeather = [
    { code: '1000', weather: 'Clear-Night'},
    { code: '1003', weather: 'Cloudy-Night'},
    { code: '1006', weather: 'Cloudy-Night'},
    { code: '1009', weather: 'Overcast-Night'},
    { code: '1030', weather: 'Fog-Night'},
    { code: '1063', weather: 'Light-Rain-Night'},
    { code: '1066', weather: 'Light-Snow-Night'},
    { code: '1069', weather: 'Light-Rain-Night'},
    { code: '1072', weather: 'Light-Rain-Night'},
    { code: '1087', weather: 'Thunderstorm-Night'},
    { code: '1114', weather: 'Heavy-Snow-Night'},
    { code: '1117', weather: 'Heavy-Snow-Night'},
    { code: '1135', weather: 'Fog-Night'},
    { code: '1147', weather: 'Fog-Night'},
    { code: '1150', weather: 'Light-Rain-Night'},
    { code: '1153', weather: 'Light-Rain-Night'},
    { code: '1168', weather: 'Light-Rain-Night'},
    { code: '1171', weather: 'Heavy-Rain-Night'},
    { code: '1180', weather: 'Light-Rain-Night'},
    { code: '1183', weather: 'Light-Rain-Night'},
    { code: '1186', weather: 'Light-Rain-Night'},
    { code: '1189', weather: 'Light-Rain-Night'},
    { code: '1192', weather: 'Heavy-Rain-Night'},
    { code: '1195', weather: 'Heavy-Rain-Night'},
    { code: '1198', weather: 'Light-Rain-Night'},
    { code: '1201', weather: 'Heavy-Rain-Night'},
    { code: '1204', weather: 'Light-Rain-Night'},
    { code: '1207', weather: 'Heavy-Rain-Night'},
    { code: '1210', weather: 'Light-Snow-Night'},
    { code: '1213', weather: 'Light-Snow-Night'},
    { code: '1216', weather: 'Light-Snow-Night'},
    { code: '1219', weather: 'Light-Snow-Night'},
    { code: '1222', weather: 'Heavy-Snow-Night'},
    { code: '1225', weather: 'Heavy-Snow-Night'},
    { code: '1237', weather: 'Light-Rain-Night'},
    { code: '1240', weather: 'Light-Rain-Night'},
    { code: '1243', weather: 'Heavy-Rain-Night'},
    { code: '1246', weather: 'Heavy-Rain-Night'},
    { code: '1249', weather: 'Light-Rain-Night'},
    { code: '1252', weather: 'Heavy-Rain-Night'},
    { code: '1255', weather: 'Light-Snow-Night'},
    { code: '1258', weather: 'Heavy-Snow-Night'},
    { code: '1261', weather: 'Light-Rain-Night'},
    { code: '1264', weather: 'Heavy-Snow-Night'},
    { code: '1273', weather: 'Thunderstorm-Night'},
    { code: '1276', weather: 'Thunderstorm-Night'},
    { code: '1279', weather: 'Light-Snow-Night'},
    { code: '1282', weather: 'Heavy-Snow-Night'}    
];

const WEATHERKEY = 'd006e6c83c9c478fac9125414232609';

const searchBar = document.getElementById('search');
const searchButton = document.getElementById('submit');

searchButton.addEventListener('click', ()=>{
    let location = searchBar.value;
    if (location === '') return
    getCurrentWeatherInfo(location);
    getNextDaysWeatherInfo(location);
    getTimeInfo(location);
    searchBar.value = '';
})



function getCurrentWeatherInfo(location){
    fetch(`https://api.weatherapi.com/v1/current.json?key=${WEATHERKEY}&q=${location}`, {mode: 'cors'})
    .then((response)=>{
        return(response.json());
    })
    .then((response)=>{
        displayCurrentWeatherInfo(response.current);
        displayCurrentLocationInfo(response.location);
        setBackground(response.current.condition.code, response.location.localtime);
        setDayNightStyles(response.location.localtime);
    })
    .catch((err)=>{
        console.log('Did not fetch');
    })
}

function getTimeInfo(location){
    fetch(`https://api.weatherapi.com/v1/timezone.json?key=${WEATHERKEY}&q=${location}`, {mode: 'cors'})
    .then((response)=>{
        return(response.json());
    })
    .then((response)=>{
        displayCurrentTimeInfo(response.location.localtime);
        forecastDayIterator(response.location.localtime);
    })
    .catch((err)=>{
        console.log('Did not fetch');
    })
}

function getNextDaysWeatherInfo(location){
    fetch(`https://api.weatherapi.com/v1/forecast.json?key=${WEATHERKEY}&q=${location}&days=5`, {mode: 'cors'})
    .then((response)=>{
        return(response.json());
    })
    .then((response)=>{
        forecastWeatherIterator(response.forecast.forecastday)
    })
    .catch((err)=>{
        console.log('Did not fetch');
    })
}

function displayCurrentWeatherInfo(weatherInfo){
    const temperature = document.getElementById('temperature');
    const forecast = document.getElementById('forecast');

    temperature.innerHTML = weatherInfo.temp_f+'℉';
    forecast.innerHTML = weatherInfo.condition.text;
}

function displayCurrentLocationInfo(locationInfo){
    const location = document.getElementById('location');
    location.innerHTML = locationInfo.name;
}

function displayCurrentTimeInfo(timeInfo){
    const currentDate = document.getElementById('current-date');
    currentDate.innerHTML = moment(timeInfo).format("dddd, MMMM Do YYYY");
}

function forecastDayIterator(time){
    for (let i = 1; i < 5; i++) {
        displayNextDaysDate(i, time);   
    }
}

function forecastWeatherIterator(forecastArray){
    for (let i = 1; i < forecastArray.length; i++) {
        displayNextDaysTemps(i, forecastArray[i].day.avgtemp_f);
        displayNextDaysWeather(i, forecastArray[i].day.condition.text);
    }
}

function displayNextDaysDate(id, time){
    const nextDate = document.getElementById(`day${id}`);
    nextDate.innerHTML = moment(time).add(id, 'd').format("dddd");
}

function displayNextDaysTemps(id, temp){
    const nextTemp = document.getElementById(`temp${id}`);
    nextTemp.innerHTML = temp;
}

function displayNextDaysWeather(id, weather){
    const nextTemp = document.getElementById(`fore${id}`);
    nextTemp.innerHTML = weather;
}

function setBackground(weatherCode, time){
    let currentTime = moment(time).format('H');
    let weatherIndex = '';
    let weatherBackground = '';
    if (currentTime >= 0 && currentTime < 6){
        weatherIndex = nightWeather.findIndex(x => x.code === weatherCode.toString());
        weatherBackground = nightWeather[weatherIndex].weather;
    }
    else if (currentTime > 18 && currentTime <= 23){
        weatherIndex = nightWeather.findIndex(x => x.code === weatherCode.toString());
        weatherBackground = nightWeather[weatherIndex].weather;
    }
    else{
        weatherIndex = dayWeather.map(e => e.code).indexOf(weatherCode.toString());
        weatherBackground = dayWeather[weatherIndex].weather;
    }
    
    document.body.style.backgroundImage = `url(/src/assets/images/${weatherBackground}.png)`;
}

function setDayNightStyles(time){
    let currentTime = moment(time).format('H');
    const containers = document.querySelectorAll('[data]');
    containers.forEach(container => {
        if (currentTime >= 0 && currentTime < 6){
            container.classList.remove('daytime')
            container.classList.add('nighttime')
        }
        else if (currentTime > 18 && currentTime <= 23){
            container.classList.remove('daytime')
            container.classList.add('nighttime')
        }
        else{
            container.classList.remove('nighttime')
            container.classList.add('daytime')
        }
    });
}

document.addEventListener('DOMContentLoaded', ()=>{
    getCurrentWeatherInfo('Oconomowoc');
    getNextDaysWeatherInfo('Oconomowoc');
    getTimeInfo('Oconomowoc');
})