const apikey ="863242cfb2b1d357e6093d9a4df19a4b";
const apiUrl ="https://api.openweathermap.org/data/2.5/weather?&units=metric&q=bangalore";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search Button");
const weathericon = document.querySelector(".weather-icon");


async function checkWeather(city){
    const response = await fetch(`apiUrl + & appid = ${apikey} `);
    var data = await response.json();
    console.log(data);

    document.querySelector(".city").innerHTML= data.name;
    document.querySelector(".temp").innerHTML= math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML= data.main.humidity + "%";
    document.querySelector(".wind").innerHTML= data.wind.speed + "km/h";

    if(data.weather[0].main == "clouds"){
        weathericon.src = "images/clouds.png";
    }
    else if(data.weather[0].main == "clear"){
        weathericon.src = "images/clear.png";
    }
    else if(data.weather[0].main == "Rain"){
        weathericon.src = "images/rain.png";
    }
    else if(data.weather[0].main == "Drizzle"){
        weathericon.src = "images/drizzle.png";
    }
    else if(data.weather[0].main == "Mist"){
        weathericon.src = "images/mist";
    }
    

    document.querySelector("weather").style.display = "block"; 
}

checkWeather()

searchBtn.addEventListener("click",()=>{
    checkWeather(searchBox.value);
})