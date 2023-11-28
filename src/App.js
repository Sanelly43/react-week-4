import React, { useState } from "react";
import Weather from "./Weather";

import "./styles.css";

export default function App() {
  let [city, setCity] = useState(" ");
  let [information, setInformation] = useState(" ");

  function handleSubmit(event) {
    event.preventDefault();
    if (city.length > 0) {
      setInformation(<Weather element={city} />);
    } else {
      alert("Please type a city");
    }
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  return (
    <div className="App">
      <div className="container">
        <h1>Weather App</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter a city..."
            onChange={updateCity}
            value={city}
          />
          <input type="submit" value="Search" />
        </form>
        <div>{information}</div>
        <footer>
              this project was coded by Sanelisiwe Mnguni and is {""}
        <a href="https://github.com/Sanelly43/react-week-4/edit/main/src/App.js"
          open-sourced on Github and {""}
        <a href="https://rad-lebkuchen-acfa1a.netlify.app/">
          hosted on Netlify
          </a>
          </footer>
          </div>
      </div>
    </div>
  );
}
