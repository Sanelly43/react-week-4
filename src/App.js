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
      </div>
    </div>
  );
}
