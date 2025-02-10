
const apiKey = "f939ffce1cb62da66213e0bbb1a2cd6d";
const city = "Volgograd";
const lang = "ru";
const units = "metric";
const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=${lang}&units=${units}&appid=${apiKey}`;

function fetchWeather() {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      if (data.cod === 200) {
        const temperature = Math.round(data.main.temp);
        document.getElementById("weather").innerText = `${temperature}°C`;
      } else {
        document.getElementById("weather").innerText =
          "Не удалось загрузить данные о погоде";
      }
    })
    .catch((error) => {
      console.error("Ошибка при загрузке данных:", error);
      document.getElementById("weather").innerText =
        "Ошибка загрузки данных";
    });
}
fetchWeather();