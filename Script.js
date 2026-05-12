const apiKey = "YOUR_API_KEY";

const searchBtn = document.getElementById("searchBtn");

searchBtn.addEventListener("click", () => {
  const city = document.getElementById("cityInput").value;

  if(city === "") {
    alert("Please enter a city name");
    return;
  }

  getWeather(city);
});

async function getWeather(city) {

  const url =
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {

    const response = await fetch(url);
    const data = await response.json();

    if(data.cod === "404") {
      alert("City not found");
      return;
    }

    document.getElementById("cityName").innerText = data.name;
    document.getElementById("temperature").innerText =
      `${Math.round(data.main.temp)}°C`;

    document.getElementById("condition").innerText =
      data.weather[0].main;

    document.getElementById("humidity").innerText =
      data.main.humidity;

    document.getElementById("wind").innerText =
      data.wind.speed;

  } catch(error) {
    console.log("Error fetching weather data:", error);
  }
}
