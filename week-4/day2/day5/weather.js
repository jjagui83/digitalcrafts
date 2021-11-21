console.log("Jose")
const h2Container = document.querySelector(".h2Container")
// const apiUrl = "api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}"
async function cityWeather() {
    // h2Container.innerHTML = ""
    const cityData = document.querySelector(".cityName").value;
    const APIkey = "41e0a3b6ed5b7f5471c5ef07b0441835"
    const weatherData = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityData}&appid=${APIkey}&units=imperial`);
    const jsonweather = await weatherData.json();
    h2Container.innerHTML = ''
    const cityTemp = document.createElement("p");
    console.log(jsonweather.main.temp)
    cityTemp.innerHTML = (jsonweather.main.temp);
    
        h2Container.append(cityTemp);


    
    
       
}
const input = document.querySelector(".input");
input.addEventListener("click", () => cityWeather());



