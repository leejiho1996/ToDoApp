const API_KEY = "3b9bb82dd6200b16ba5664ab8ba9de2e"
function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
    fetch(url)
    .then((response) => response.json())
    .then((data) => {
        const weatherContainer = document.querySelector("#weather span:first-child");
        const cityContainer = document.querySelector("#weather span:last-child");
        weatherContainer.innerText = `${data.weather[0].main} / ${data.name} - ${data.main.temp}℃`;
    });

}
function onGeoError() {
    alert("Can't find you. No weather for you.")
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);