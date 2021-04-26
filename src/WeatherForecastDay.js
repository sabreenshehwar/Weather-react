import React from "react";

export default function WeatherForecastDay(props) {
    function day() {
        let date = new Date(props.data.dt * 1000);
        let day = date.getDay();
        let days = [
            "Sun",
            "Mon",
            "Tues",
            "Wed",
            "Thurs",
            "Fri",
            "Sat",
        ];

        return days[day];;
    }
    return (
        <div className="card">
            <div className="card-body">
                <div className="card-title">
                    <div className="WeatherForecast-day">
                        {day()}
                    </div>
                </div>
                <div className="WeatherForecast-temperatures">
                    <span className="WeatherForecast-temperature-max">{Math.round(props.data.temp.max)} <small>°C</small> </span>
                    | <span className="WeatherForecast-temperature-min">{Math.round(props.data.temp.min)} <small>°C</small></span>
                </div>
            </div>
        </div>
    );
}