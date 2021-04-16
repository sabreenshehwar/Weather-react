import React from "react";
import "./WeatherForecast.css"

export default function WeatherForecast() {
    return (
        <div className="WeatherForecast">
            <div className="card">
                <div className="card-body">
                    <div className="card-title">
                        <div className="WeatherForecast-day">
                            Saturday
                        </div>
                    </div>
                    <div className="WeatherForecast-temperatures">
                        <span className="WeatherForecast-temperature-max">10°C </span>
                        |
                    <span className="WeatherForecast-temperature-min">2° C</span>
                    </div>
                </div>
            </div>
        </div>
    )
        ;
} 
