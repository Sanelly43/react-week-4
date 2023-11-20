import React, { useState } from "react";
import axios from "axios";

export default function Weather(props) {
  let [temperature, setTemperature] = useState(null);
  let [description, setDescription] = useState(null);
  let [humidity, setHumidity] = useState(null);
  let [wind, setWind] = useState(null);
  let [icon, setIcon] = useState(null);

  function showData(response) {
    console.log(response.data);
    setTemperature(response.data.main.temp);
    setDescription(response.data.weather[0].description);
    setHumidity(response.data.main.humidity);
    setWind(response.data.wind.speed);
    setIcon(response.data.weather[0].icon);
  }

  if (temperature) {
    let iconImage = `https://openweathermap.org/img/wn/${icon}@2x.png`;
    return (
      <div className="Weather">
        <ul>
          <li>Temperature: {Math.round(temperature)}°C</li>
          <li>Description: {description} </li>
          <li>Humidity: {humidity}% </li>
          <li>Wind: {wind} km/h </li>
          <li>
            <img src={iconImage} alt="Icon Image" />
          </li>
        </ul>
      </div>
    );
  } else {
    let key = `7746bdeabca928cfedcad71e52fd9d66`;
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${props.element}&appid=1a2b7258ebd456c01aef9175dfe8b709&units=metric`;
    axios.get(url).then(showData);
  }
}
