const WEATHER_API_KEY = 'key';
const API_STEM = 'http://api.openweathermap.org/data/2.5/weather?';

function zipUrl(zip) {
  return `${API_STEM}zip=${zip}&units=imperial&appid=${WEATHER_API_KEY}`;
}

function fetchForecast(zip) {
  return fetch(zipUrl(zip))
    .then(respponse => respponse.json())
    .then(responseJSON => {
      console.log(responseJSON);
      return {
        main: responseJSON.weather[0].main,
        description: responseJSON.weather[0].description,
        temp: responseJSON.weather[0].description,
      };
    })
    .catch(err => {
      console.log(err);
    });
}

export default fetchForecast;
