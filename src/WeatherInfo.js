import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
    return (
        <div className="Weather Info">
            <h2>{props.data.city}</h2>
            <ul>
                <li className="Day">
                    <FormattedDate date={props.data.date} />
                </li>
            </ul>
            <div className="col-6">
                <img src={props.data.icon} alt={props.data.description} />{" "}
            </div>
            <div className="row">
                <div className="col-6">
                    <span className="temperature">{Math.round(props.data.temperature)}</span>
                    <span className="units">°C</span>
                </div>
                <div className="col-6">
                    <ul>
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