var cityName = document.querySelector('.city_name_text');
var main = document.querySelector('#name');
var temp = document.querySelector('.temp');
var cond = document.querySelector('.cond');
var clouds = document.querySelector('.clouds');
var button = document.querySelector('.submit');

button.addEventListener('click', function(name){
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+cityName.value+'&appid=be12b1498172220bb5843bfdf8d66f6b')
    .then(response => response.json())
    .then(data => {
        var tempValue = data['main']['temp'];
        var nameValue = data['name'];
        var condValue = data['weather'][0]['description'];

        main.innerHTML = nameValue;
        cond.innerHTML = "Condition - " + condValue;
        temp.innerHTML = "Temp - " + tempValue;
        cityName.value ="";

    })
    .catch(err => alert("Wrong city name!"));
})

function convertToF(celsius) {
    let fahrenheit = celsius * 9/5 + 32;
    return fahrenheit;
}

convertToF(tempValue);