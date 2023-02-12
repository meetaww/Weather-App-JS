const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "73e88da053mshbe33c95aaf35738p172aa8jsna0f5f380df0a",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};

const getWeather = (city) => {
  // console.log(city)
  cityName.innerHTML = city;

  fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city,
    options
  )
    .then((response) => response.json())
    .then((response) => {
      console.log(response);

      cloud_pct.innerHTML = response.cloud_pct;
      temp.innerHTML = response.temp;
      feels_like.innerHTML = response.feels_like;
      humidity.innerHTML = response.humidity;
      min_temp.innerHTML = response.min_temp;
      max_temp.innerHTML = response.max_temp;
      wind_speed.innerHTML = response.wind_speed;
      wind_degrees.innerHTML = response.wind_degrees;
      sunrise.innerHTML = response.sunrise;
      
    })
    .catch((err) => console.error(err));
};


const getWeatherARR = (city) => {
  fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city,
    options
  )
    .then((response) => response.json())
    .then((response) => {
      //For table body
      //Writing a html string to the DOM
      table_body.innerHTML += `<tr>
      <th scope="row" class="text-start">${city}</th>
      <td>${response.cloud_pct}</td>
      <td>${response.humidity}</td>
      <td>${response.temp}</td>
    </tr>`
      
    })
    .catch((err) => console.error(err));
};

submit.addEventListener("click", (e) => {
  e.preventDefault();
  getWeather(city.value);
});

getWeather("Delhi");

arr = ["Hong Kong", "London", "Shanghai"];
arr.forEach((element) => {
  getWeatherARR(element);
});
