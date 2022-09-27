var citySearchEl = document.querySelector('#citySearch');//form to search city
var submitBtn =  document.querySelector('#submit')//the search button;
var cityInput = document.querySelector('#cityinput')// the input area;
var showWeatherEl = document.querySelector('#showWeather')// the space to show weahter;

console.log(submitBtn)
console.log(cityInput)

function handleSubmit(event) {
    event.preventDefault();
    var cityName = cityInput.value.trim();
    if (cityName) {
        getCityRepo(cityName);
    showWeatherEl.textContent = '';
    } else {
        alert('Please Input City Name!');
    }
};


function getCityRepo(cityName) {

    var apiKey = '050f6c384571e8bc7593ff44448e1672';

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
}


citySearchEl.addEventListener('submit', handleSubmit);

console.log(citySearchEl)