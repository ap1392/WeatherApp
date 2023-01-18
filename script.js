function search() {
  const input = document.getElementById("searchBox").value;
  let API1stPart = "https://api.openweathermap.org/data/2.5/weather?q=";
  let APILastPart = "&APPID=d62cd3bce51adb9884f657ac261046b7";

  fetch(API1stPart + input + APILastPart, { mode: "cors" })
    .then(function (response) {
      return response.json();
    })
    .then(function (response) {
      console.log(response);
      findWeather(response);
    })
    .catch(function (error) {
      console.log(error);
    });
}

function findWeather(response) {
  const name = response.name;
  const currentTemp = response.main.temp;
  const maxTemp = response.main.temp_max;
  const minTemp = response.main.temp_min;
  console.log(
    "The temperature in " +
      name +
      " today is " +
      currentTemp +
      " with a high of " +
      maxTemp +
      " and a low of " +
      minTemp
  );
}
