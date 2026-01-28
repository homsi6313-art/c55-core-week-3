
function tempCelsiusToFahrenheit(tempCelsius) {
  return (tempCelsius * 9 / 5) + 32;
}
function tempCelsiusToKelvin(tempCelsius) {
  return tempCelsius + 273.15;
}
function getTemperatureStatus(tempCelsius) {
  if (tempCelsius < 0) return "Freezing";
  else if (tempCelsius >= 0 && tempCelsius < 10) return "Cold";
  else if (tempCelsius >= 10 && tempCelsius < 20) return "Mild";
  else if (tempCelsius >= 20 && tempCelsius < 30) return "Warm";
  return "Hot";
}

  function printWeatherReport(city, tempCelsius) {
    let tempFahrenheit = tempCelsiusToFahrenheit(tempCelsius);
    let tempKelvin = tempCelsiusToKelvin(tempCelsius);
    let status = getTemperatureStatus(tempCelsius);

    console.log("Weather Report for " + city);
    console.log("Temperature: " + tempCelsius + "°C");
    console.log("Temperature: " + tempFahrenheit + "°F");
    console.log("Temperature: " + tempKelvin + "K");
    console.log("Status: " + status);
    console.log("---");
  }
  function calculateWindChill(tempCelsius, windSpeed) {
  return (
    13.12 +
    0.6215 * tempCelsius -
    11.37 * Math.pow(windSpeed, 0.16) +
    0.3965 * tempCelsius * Math.pow(windSpeed, 0.16)
  );
}

function printWindChill(city, tempCelsius, windSpeed) {
  const windChill = calculateWindChill(tempCelsius, windSpeed);
  console.log("Wind chill in " + city + ": " + windChill.toFixed(2) + "°C");
}
printWeatherReport("Amsterdam", 22);

printWeatherReport("berlin", 15);

printWeatherReport("Copenhagen", 5);

printWindChill("Amsterdam", 22, 15);
printWindChill("Berlin", 15, 20);
printWindChill("Copenhagen", 5, 25);