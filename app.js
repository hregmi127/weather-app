
const apikey = "6b00cc6cf1144cd538cfa75182c754df";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
const searchbox = document.querySelector(".searchfield input");
const searchbtn = document.querySelector(".searchfield button");
const weatherpicture = document.querySelector(".weather-icon");

// "https://api.openweathermap.org/data/2.5/weather?q=vancouver&units=metric&appid=6b00cc6cf1144cd538cfa75182c754df"

async function checkweather(city){
    // const response = await fetch("https://api.openweathermap.org/data/2.5/weather?&units=metric&q=london&appid=6b00cc6cf1144cd538cfa75182c754df");

    const response = await fetch(apiurl + city + `&appid=${apikey}`);
        // later
            if(response.status==404){
                document.querySelector(".error").style.display = "block";
                document.querySelector(".weather").style.display ="none";
            } else {
                var data = await response.json();

    console.log(data);

    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temperature").innerHTML= Math.round(data.main.temp) + '°C';
    document.querySelector(".humidity").innerHTML=data.main.humidity+"%";
    document.querySelector(".wind").innerHTML=data.wind.speed+" km/h";
    document.querySelector(".weatherdesc").innerHTML=data.weather[0].main;
    document.querySelector(".country").innerHTML = data.sys.country;

    if(data.weather[0].main=="Clouds"){
        weatherpicture.src = "./images/cloudy.png";

    }
    else if(data.weather[0].main=="Haze"){
        weatherpicture.src ="./images/haze.png";
    }
    else if(data.weather[0].main=="Rain"){
        weatherpicture.src = "./images/rain.webp";
    }
    else if(data.weather[0].main=="Drizle"){
        weatherpicture.src = "./images/drizzle.png";
    } 
    else if(data.weather[0].main=="Thunderstorm"){
        weatherpicture.src = "./images/thunderstorm.png"
    } else if(data.weather[0].main=="Clear"){
        weatherpicture.src ="./images/clear.png"
    }
        

            document.querySelector(".weather").style.display = "block";
            document.querySelector(".error").style.display = "none";
            }

            // later
}
searchbox.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      checkweather(searchbox.value);
    }
  });
searchbtn.addEventListener("click",()=>{
    checkweather(searchbox.value);

})
