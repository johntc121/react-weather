import React from 'react'
import './CurrentDay.css'

const currentDay = (props) =>  {
    const {currentDay} = props;
    const icon = `http://openweathermap.org/img/wn/${currentDay.icon}@2x.png`;
    return (
        <div className="currentDay">
            <h1>{currentDay.city}</h1>
            <h3>Temp: {currentDay.temp}</h3>
            <p>{currentDay.weatherType}</p>
            <img src={icon} alt={currentDay.icon}/>
        </div>
    )
}

export default currentDay;
