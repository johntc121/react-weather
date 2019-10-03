import React from 'react'
import './Day.css'

const day = (props) => {
    return (
        <div className="Day">
            <h5>{props.day}</h5>
            <h6>Temp: {props.temp}</h6>
            <p>{props.weatherType}</p>

        </div>
    )
}

export default day;
