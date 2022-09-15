var inputval = document.querySelector('#cityinput');
var btn = document.querySelector('#add');
var city = document.querySelector('#cityoutputs');
var descrip = document.querySelector('#descriptions');
var temperature = document.querySelector('#temp');
var wind = document.querySelector('#wind');

apiKey = "6725676a22a3b0ea6904a18796397df6";

function conversion(val){
    return (val - 273).toFixed(2)
}
// working with fetch method


//when you click on search button
btn.addEventListener('click', function(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputval.value+'&appid='+apiKey)
    .then(res => res.json())

    .then(data => {
        var nameval = data['name']
        var descrip = data['weather'][0]['description']
        var temperature = data['main']['temp']
        var  windspd = data['wind']['speed']

        // insert the details using innerhtml

        city.innerHTML = `Weather of <span>${nameval}</span>`
        temp.innerHTML = `Temperature: <span>${conversion(temperature)} C</span>`
        descriptions.innerHTML = `Sky Conditions: <span>${descrip}</span>`
        wind.innerHTML = `Wind Speed: <span>${windspd} km/h</span>`

    })
          .catch(err => alert('You entered Wrong city name'))
    

})






 