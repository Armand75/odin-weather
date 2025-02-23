import createGif from "./giphy.js"


const weatherDetails = document.createElement("div");
const giphyAPI = "vJBjl6cH0uR3Cw5F4vUb6PY9bVCfr0UK";
weatherDetails.className = "weather-details";

export default async function weather(location) {
  try {
    const response = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=metric&key=3ZN4596MTGBQL39ZW7SURS3X8&contentType=json`,
      {
        method: "GET",
        headers: {},
      }
    );
    const data = await response.json();
    const sanitizedData = sanitizeData(data);
    const weatherDiv = (createWeatherDetails(sanitizedData))
    return weatherDiv;
  } catch (error) {
    console.log(error);
  }
}

async function createWeatherDetails(sanitizedData) {

    const gifURL = await createGif(sanitizedData.icon);
  
  weatherDetails.innerHTML = `
    <div class="temp-icon">
        <p class="temp">${sanitizedData.temp} ºC</p>
        <p class="icon">
            <img src="${gifURL}" alt="${sanitizedData.icon} icon" />
        </p>
    </div>
    <div class="others">
        <p class="location">${sanitizedData.location}</p>
        <p class="weather">${sanitizedData.weather}</p>
    </div>
  `;
  return weatherDetails;
}





function sanitizeData(data){
    const location = data.resolvedAddress;
    const temp = data.currentConditions.temp;
    const weather = data.currentConditions.conditions;
    const icon = data.currentConditions.icon

    const pureData = {location, temp, weather, icon}
    console.log(pureData);
    return pureData;
}
