document.getElementById("fetch-weather").onclick = async () => {
    const city = document.getElementById("city-input").value
    const apiKey = "328b33f675347921285d1ad80f057964"
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
    const data = await response.json()

    if (data.weather) {
        document.getElementById("city-name").textContent = data.name
        document.getElementById("temp").textContent = `${data.main.temp} °C`
        document.getElementById("description").textContent = data.weather[0].description
        document.getElementById("weather-display").classList.add("visible")

        const weatherType = data.weather[0].main.toLowerCase()
        document.body.className = weatherType
    }
}
