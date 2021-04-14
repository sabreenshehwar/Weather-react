import React, { useState } from "react";
import axios from "axios";
import FormattedDate from "./FormattedDate";
import Loader from "react-loader-spinner";
import "./Weather.css";

export default function Weather(props) {
    const [weatherData, setWeatherData] = useState({ ready: false });
    function handleResponse(response) {
        setWeatherData({
            ready: true,
            city: response.data.name,
            date: new Date(response.data.dt * 1000),
            temperature: response.data.main.temp,
            wind: response.data.wind.speed,
            humidity: response.data.main.humidity,
            icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
            description: response.data.weather[0].description,
        });
    }
    if (weatherData.ready) {
        return (
            <div className="Weather">
                <form>
                    <div className="row">
                        <div className="col-9">
                            <input type="search"
                                placeholder="Enter city here..."
                                className="form-control"
                            />
                        </div>
                        <button type="button" className="btn btn-outline-info">
                            Search </button>
                    </div>
                </form>
                <h2>{weatherData.city}</h2>
                <ul>
                    <li>
                        <FormattedDate date={weatherData.date} />
                    </li>
                </ul>
                <div className="col-6">
                    <img src={weatherData.icon} alt={weatherData.description} />{" "}
                </div>
                <div className="row">
                    <div className="col-6">
                        <span className="temperature">{Math.round(weatherData.temperature)}</span>
                        <span className="units">°C</span>
                    </div>
                    <div className="col-6">
                        <ul>
                            <li>
                                {weatherData.description}
                            </li>
                            <li className="Humidity">
                                Humidity:{Math.round(weatherData.humidity)}%
                            </li>
                            <li className="Wind">
                                Wind:{Math.round(weatherData.wind)}km/h
                            </li>
                        </ul>
                    </div>
                </div>
            </div >
        );
    } else {
        const apiKey = "ae84fe76c05b33cdc51b77049718e2b3";
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
        axios.get(apiUrl).then(handleResponse);

        return (
            <div>
                <Loader
                    type="ThreeDots"
                    color="#00BFFF"
                    height={100}
                    width={100}
                    timeout={3000}
                />
            </div>
        );
    }
}