function searchButtonCallback() {
    var destination = document.getElementById('destinationSearch').value;
    fetchDestinationInfo(destination);
}

function fetchDestinationInfo(destination) {
    var weatherAPI = 'http://api.weatherapi.com/v1/current.json?key=f43f120bef21464bb8450352241003&q=' + destination;
    fetch(weatherAPI)
        .then(response => response.json())
        .then(weatherData => {
            var location = weatherData.location.name;
            var temperature = weatherData.current.temp_c;
            var condition = weatherData.current.condition.text;
            var hrand = Math.floor(Math.random() * (50 - 10 + 1)) + 10;

            var destinationInfoHTML = '<h2>' + location + '</h2>';
            destinationInfoHTML += '<p>Temperature: ' + temperature + '°C</p>';
            destinationInfoHTML += '<p>Condition: ' + condition + '</p>';

            document.getElementById('destinationInfo').innerHTML = destinationInfoHTML;
        })
        .catch(error => {
            document.getElementById('destinationInfo').innerHTML = '<p>Failed to fetch weather data. Please try again later.</p>';
        });
}

export default searchButtonCallback;