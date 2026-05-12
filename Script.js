const apiKey = "987277365723a3e53480b51a58954197";

const searchBtn = document.getElementById("searchBtn");

searchBtn.addEventListener("click", () => {
  const city = document.getElementById("cityInput").value.trim();

  if (city === "") {
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

    console.log(data);

    // ERROR HANDLING
    if (data.cod != 200) {
      alert(data.message);
      return;
    }

    // UPDATE UI
    document.getElementById("cityName").innerText =
      data.name;

    document.getElementById("temperature").innerText =
      `${Math.round(data.main.temp)}°C`;

    document.getElementById("condition").innerText =
      data.weather[0].description;

    document.getElementById("humidity").innerText =
      data.main.humidity;

    document.getElementById("wind").innerText =
      data.wind.speed;

  } catch (error) {

    console.log("Error fetching weather data:", error);

    alert("Something went wrong.");
  }
}
