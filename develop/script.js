var citySearchEl = document.querySelector('#citySearch');//form to search city
var submitBtn =  document.querySelector('#submit')//the search button;
var cityInput = document.querySelector('#cityinput')// the input area;
var showCurrentWeatherEl = document.querySelector('#currentweather')// the space to show current weahter;
var searchHistoryEl = document.querySelector('#historycity');//show the historical search city;

var dayOneEl = document.querySelector('#dayone')
var dayTwoEl = document.querySelector('#daytwo')
var dayThreeEl = document.querySelector('#daythree')
var dayFourEl = document.querySelector('#dayfour')
var dayFiveEl = document.querySelector('#dayfive');



console.log(dayOneEl)


var cityName = cityInput.value.trim();
var cityArr=[];

function renderCity() {
  searchHistoryEl.innerHTML='';
  for (var i=0; i<cityArr.length;i++){
  var city = cityArr[i];
  var cityLi = document.createElement('button');
  cityLi.textContent = city;
  searchHistoryEl.appendChild(cityLi);
}

getCityRepo();
}

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
    showCurrentWeatherEl.textContent = '';
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
        
        var weahterUl = document.createElement('ul');
        var city = document.createElement('li');
        var temp = document.createElement('li');
        var wind = document.createElement('li');
        var humidity = document.createElement('li');

        city.innerHTML = 'City: ' + data['name'];
        temp.innerHTML = 'Temperature: ' + data['main'].temp + ' °F';
        wind.innerHTML = 'Wind: ' + data['wind'].speed + ' MPH';
        humidity.innerHTML = 'Humidity: ' + data['main'].humidity + '%';


        showCurrentWeatherEl.appendChild(weahterUl);
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
    var dateArr = data['list'];
    dateArr.length = 100;
    console.log(dateArr);
//first day of the forecase weather;
    var dateOne = dateArr[2];
    console.log(dateOne);
    var weahterUlOne = document.createElement('ul');
    var dayOne = document.createElement('li')
    var tempOne = document.createElement('li');
    var windOne = document.createElement('li');
    var humidityOne = document.createElement('li');
  
    dayOne.innerHTML = 'Date: ' + dateOne['dt_txt'];
    tempOne.innerHTML = 'Temperature: ' + dateOne['main'].temp + ' °F';
    windOne.innerHTML = 'Wind: ' + dateOne['wind'].speed + ' MPH';
    humidityOne.innerHTML = 'Humidity: ' + dateOne['main'].humidity + '%';

    console.log(dayOne.innerHTML);
    console.log(tempOne.innerHTML);
    console.log(windOne.innerHTML);
    console.log(humidityOne.innerHTML);
  
    dayOneEl.appendChild(weahterUlOne);
    weahterUlOne.appendChild(dayOne);
    weahterUlOne.appendChild(tempOne);
    weahterUlOne.appendChild(windOne);
    weahterUlOne.appendChild(humidityOne); 
  
//second day of the forecast weather;

    var dateTwo = dateArr[10];
    console.log(dateTwo);
    var weahterUlTwo = document.createElement('ul');
    var dayTwo = document.createElement('li')
    var tempTwo = document.createElement('li');
    var windTwo = document.createElement('li');
    var humidityTwo = document.createElement('li');
  
    dayTwo.innerHTML = 'Date: ' + dateTwo['dt_txt'];
    tempTwo.innerHTML = 'Temperature: ' + dateTwo['main'].temp + ' °F';
    windTwo.innerHTML = 'Wind: ' + dateTwo['wind'].speed + ' MPH';
    humidityTwo.innerHTML = 'Humidity: ' + dateTwo['main'].humidity + '%';
  
    dayTwoEl.appendChild(weahterUlTwo);
    weahterUlTwo.appendChild(dayTwo);
    weahterUlTwo.appendChild(tempTwo);
    weahterUlTwo.appendChild(windTwo);
    weahterUlTwo.appendChild(humidityTwo);

//Third day of the forecast weather;

var dateThree = dateArr[18];
console.log(dateThree);
var weahterUlThree = document.createElement('ul');
var dayThree = document.createElement('li')
var tempThree = document.createElement('li');
var windThree = document.createElement('li');
var humidityThree = document.createElement('li');

dayThree.innerHTML = 'Date: ' + dateThree['dt_txt'];
tempThree.innerHTML = 'Temperature: ' + dateThree['main'].temp + ' °F';
windThree.innerHTML = 'Wind: ' + dateThree['wind'].speed + ' MPH';
humidityThree.innerHTML = 'Humidity: ' + dateThree['main'].humidity + '%';

dayThreeEl.appendChild(weahterUlThree);
weahterUlThree.appendChild(dayThree);
weahterUlThree.appendChild(tempThree);
weahterUlThree.appendChild(windThree);
weahterUlThree.appendChild(humidityThree);

//Forth day of the forecast weather;

var dateFour = dateArr[26];
console.log(dateFour);
var weahterUlFour = document.createElement('ul');
var dayFour = document.createElement('li')
var tempFour = document.createElement('li');
var windFour = document.createElement('li');
var humidityFour = document.createElement('li');

dayFour.innerHTML = 'Date: ' + dateFour['dt_txt'];
tempFour.innerHTML = 'Temperature: ' + dateFour['main'].temp + ' °F';
windFour.innerHTML = 'Wind: ' + dateFour['wind'].speed + ' MPH';
humidityFour.innerHTML = 'Humidity: ' + dateFour['main'].humidity + '%';

dayFourEl.appendChild(weahterUlFour);
weahterUlFour.appendChild(dayFour);
weahterUlFour.appendChild(tempFour);
weahterUlFour.appendChild(windFour);
weahterUlFour.appendChild(humidityFour);

//Fifth day of the forecast weather;

var dateFive = dateArr[34];
console.log(dateFive);
var weahterUlFive = document.createElement('ul');
var dayFive = document.createElement('li')
var tempFive = document.createElement('li');
var windFive = document.createElement('li');
var humidityFive = document.createElement('li');

dayFive.innerHTML = 'Date: ' + dateFive['dt_txt'];
tempFive.innerHTML = 'Temperature: ' + dateFive['main'].temp + ' °F';
windFive.innerHTML = 'Wind: ' + dateFive['wind'].speed + ' MPH';
humidityFive.innerHTML = 'Humidity: ' + dateFive['main'].humidity + '%';

dayFiveEl.appendChild(weahterUlFive);
weahterUlFive.appendChild(dayFive);
weahterUlFive.appendChild(tempFive);
weahterUlFive.appendChild(windFive);
weahterUlFive.appendChild(humidityFive);

    });
})}

citySearchEl.addEventListener('submit', handleSubmit);
