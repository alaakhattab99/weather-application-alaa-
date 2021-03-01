//Form
var button= document.querySelector('.icon'); 
var input = document.querySelector('.city-input'); 
// City & weather
var city= document.querySelector('#city'); 
var weather= document.querySelector('#weather');
// Temperature
var currentTemp= document.querySelector('#current');
var minTemp= document.querySelector('#min');
var maxTemp= document.querySelector('#max');
// Info
var wind= document.querySelector('#wind');
var humidity= document.querySelector('#humidity');
var pressure= document.querySelector('#pressure');
var icon= document.querySelector('#weather-icon');

//Open weather API key: 
const apiKey= '5dd896efa802431355a489eb925cc96e'; 


 
//Button Event listener 'click' 
button.addEventListener('click', function(){

    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${input.value}&units=metric&appid=${apiKey}`)
    .then(function(response){  return response.json()})
    .then(function(data){
        console.log(data)
    

     
        //Variables
 const city = data.name; 
 const weather = data.weather[0].description;
 const Temp = Math.floor(data.main.temp);
 const minTemp= Math.floor(data.main.temp_min);
 const maxTemp= Math.floor(data.main.temp_max);
 const wind= data.wind.speed ; 
 const pressure= data.main.pressure ; 
 const humidity= data.main.humidity ; 
 const icon= data.weather[0].icon;
 const iconSrc= `http://openweathermap.org/img/wn/${icon}@2x.png`;


        //place the value
        window.city.innerHTML= city;
        window.weather.innerHTML= weather; 
        window.currentTemp.innerHTML= `${Temp}<sup>°</sup>`; 
        window.minTemp.innerHTML= `${minTemp}<sup>°</sup>`
        window.maxTemp.innerHTML= `${maxTemp}<sup>°</sup>`
        window.wind.innerHTML= `Wind ${wind} m/s`;
        window.humidity.innerHTML= `Humidity ${humidity}%`;
        window.pressure.innerHTML= `Pressure ${pressure} hPa `;
        window.icon.src= iconSrc;
        // window.icon.src= iconSrc;





    })   

});
