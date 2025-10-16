//https://api.openweathermap.org/data/3.0/onecall?lat=33.44&lon=-94.04&exclude=hourly,daily&appid=c42bfed6b117803c71404df773a9a4ed

const apiKey = "c42bfed6b117803c71404df773a9a4ed";

document.getElementById("btnSearch").addEventListener("click", () => {
  const city = document.getElementById("cityInput").value.trim();
  if (city) {
    getWeather(city);
  } else {
    alert("Please Enter City Name");
  }
});

async function getWeather(city) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error("City not Found");
    const data = await res.json();
    showWeather(data);
  } catch (error) {
    document.getElementById(
      "output"
    ).innerHTML = `<p style="color:red;">${error.message}</p>`;
  }
}
function showWeather(data) {
  const weatherInfo = document.getElementById("output");
  //please convert the number from sunrise and sunset to time also the Fahrenheit to Celcius
  weatherInfo.innerHTML = `
        <h3>${data.name}, ${data.sys.country}</h3>
        <h4>Lat: ${data.coord.lat}</h4>
        <h4>Sunrise ${data.sys.sunrise}</h4>
        <img src="https://openweathermap.org/img/wn/${
          data.weather[0].icon
        }@2x.png" alt="Weather Icon" />
        <div class="temp">Temprature: ${Math.round(data.main.temp)}F</div>
        <div class="desc" >Decription: ${data.weather[0].description}</div>
        
    
    
    `;
}
