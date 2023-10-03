import moment from 'moment';

const WEATHERKEY = 'd006e6c83c9c478fac9125414232609';

const currentDate = document.getElementById('current-date');

function getCurrentWeatherInfo(location){
    fetch(`https://api.weatherapi.com/v1/current.json?key=${WEATHERKEY}&q=${location}`, {mode: 'cors'})
    .then((response)=>{
        return(response.json());
    })
    .then((response)=>{
        console.log(response);
    //    displayWeatherInfo(response.current);
    })
    .catch((err)=>{
        console.log('Did not fetch');
    })
}

function getNextDaysWeatherInfo(location){
    fetch(`https://api.weatherapi.com/v1/future.json?key=${WEATHERKEY}&q=${location}`, {mode: 'cors'})
    .then((response)=>{
        return(response.json());
    })
    .then((response)=>{
        console.log(response);
    })
    .catch((err)=>{
        console.log('Did not fetch');
    })
}

function displayWeatherInfo(weatherInfo){
    //console.log(weatherInfo);
}

document.addEventListener('DOMContentLoaded', ()=>{
    currentDate.innerHTML = moment().format("dddd, MMMM Do YYYY");
    console.log(moment().format("dddd, MMMM Do YYYY"));
})