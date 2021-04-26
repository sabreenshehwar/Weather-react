import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="Container">
        <Weather defaultCity="Tokyo" />
        <footer> <a href="https://github.com/sabreenshehwar/weather-react"
          target="_blank"
          rel="noreferrer"
        >
          open-source code
            </a>
          < br />
            by Sabreen Shehwar</footer>
      </div>
    </div>
  );
}
