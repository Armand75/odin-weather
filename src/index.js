import weather from "./weather";
import "./styles.css";

const form = document.querySelector("form");
const input = document.querySelector("input");
const content = document.querySelector(".content");

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  if (input.value) {
    const weatherContents = await weather(input.value);

    console.log(weatherContents);

    content.appendChild(weatherContents);
  }
});

const junkData = {
  datetime: "16:00:00",
  datetimeEpoch: 1740319200,
  temp: 24.2,
  feelslike: 24.2,
  humidity: 46.74,
  dew: 12.1,
  precip: 0,
  precipprob: 0,
  snow: 0,
  snowdepth: 0,
  preciptype: null,
  windgust: 6.5,
  windspeed: 5.8,
  winddir: 171,
  pressure: 1009,
  visibility: 24.1,
  cloudcover: 88.9,
  solarradiation: 479,
  solarenergy: 1.7,
  uvindex: 5,
  severerisk: 10,
  conditions: "Partially cloudy",
  icon: "partly-cloudy-day",
  stations: [],
  source: "fcst",
  sunrise: "06:11:48",
  sunriseEpoch: 1740283908,
  sunset: "18:20:51",
  sunsetEpoch: 1740327651,
  moonphase: 0.85,
};
