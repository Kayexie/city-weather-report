var citySearchEl = document.querySelector('#citySearch');//form to search city
var submitBtn =  document.querySelector('#submit')//the search button;
var cityInput = document.querySelector('#cityinput')// the input area;
var showWeatherEl = document.querySelector('#showWeather')// the space to show weahter;
var searchHistoryEl = document.querySelector('#historycity');//show the historical search city;
console.log(searchHistoryEl)


var cityName = cityInput.value.trim();
var cityArr=[];

function renderCity() {
  searchHistoryEl.innerHTML='';
  for (var i=0; i<cityArr.length;i++){
  var city = cityArr[i];
  var cityLi = document.createElement('button');
  cityLi.textContent = city;
  searchHistoryEl.appendChild(cityLi);
}}

function init() {
 var getCities = JSON.parse(localStorage.getItem('key'));
    if (getCities !== null) {
      cityArr = getCities;
    renderCity();
  }}

function storeCity() {
  localStorage.setItem('key', JSON.stringify(cityArr));
  }

function handleSubmit(event) {
    event.preventDefault();
    var cityName = cityInput.value.trim();
    // var cityNameOne = String(cityName)
    if (cityName) {
        getCityRepo(cityName);

    cityArr.push(cityName);
    showWeatherEl.textContent = '';
    } else {
        alert('Please Input City Name!');
    }
  storeCity();
  renderCity();
};

init();
console.log(cityArr);

var apiKey = '050f6c384571e8bc7593ff44448e1672';

function getCityRepo(cityName) {

   

    var apiUrl = 'https://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&appid=' + apiKey + '&units=imperial';

    fetch(apiUrl)
    .then(function(response){
      if (response.ok) {
        response.json().then(function(data){
            console.log(data)
        
        var icon = document.createElement('i')
        var weahterUl = document.createElement('ul');
        var city = document.createElement('li');
        var temp = document.createElement('li');
        var wind = document.createElement('li');
        var humidity = document.createElement('li');

        city.innerHTML = 'City: ' + data['name'];
        temp.innerHTML = 'Temperature: ' + data['main'].temp + ' °F';
        wind.innerHTML = 'Wind: ' + data['wind'].speed + ' MPH';
        humidity.innerHTML = 'Humidity: ' + data['main'].humidity + '%';


        showWeatherEl.appendChild(weahterUl);
        weahterUl.appendChild(city);
        weahterUl.appendChild(temp);
        weahterUl.appendChild(wind);
        weahterUl.appendChild(humidity);

        });
      } else {
        alert ('Error' + response.statusText);
      }
    })
    .catch(function (error)  {
        alert('Unable to connect')
    });
fiveDayForecast();
}

function fiveDayForecast() {
  var cityName = cityInput.value.trim();
  var apiUrlTwo = 'https://api.openweathermap.org/data/2.5/forecast?q=' + cityName + '&appid=' + apiKey + '&units=imperial';
  fetch(apiUrlTwo)
  .then(function(response){
    response.json().then(function(data){
    console.log(data)
    
    });
})}

citySearchEl.addEventListener('submit', handleSubmit);
