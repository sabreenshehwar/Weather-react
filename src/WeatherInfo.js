import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
    return (
        <div className="Weather Info">
            <h2>{props.data.city}</h2>
            <h5 className="Day">
                <FormattedDate date={props.data.date} />
            </h5>
            < br />
            <div className="row">
                <div className="col-6">
                    <WeatherTemperature celsius={props.data.temperature} />
                </div>
                <div className="col-6">
                    <ul>
                        <li>
                            <img src={props.data.icon} alt={props.data.description} />{" "}
                        </li>
                        <li>
                            {props.data.description}
                        </li>
                        <li className="Humidity">
                            Humidity: {Math.round(props.data.humidity)}%
                            </li>
                        <li className="Wind">
                            Wind: {Math.round(props.data.wind)}km/h
                            </li>
                    </ul>
                </div>
            </div>
        </div >
    );
}