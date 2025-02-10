const options = {
    timeZone: "Europe/Moscow",
    hour: "2-digit",
    minute: "2-digit",
  };

  const time = new Date().toLocaleTimeString("ru-RU", options);
  document.getElementById("time").innerText = time;
  setInterval(fetchWeather, 6000);