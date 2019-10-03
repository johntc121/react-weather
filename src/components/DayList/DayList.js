import React from 'react'
import Day from '../Day/Day'
import './DayList.css'

const dayList = (props) => {
    return (
        <div className="horizontal-layout">
            {props.days.map((day) => {
                return(
                <Day
                    day={day.day}
                    temp={day.temp}
                    weatherType={day.weatherType}
                    key={day.id}
                />
                )
            })}
        </div>
    )
}
    // props.days.map((day) => {
    //     return (
            
    //         <Day 
    //             day={day.day}
    //             temp={day.temp}
    //             weatherType={day.weatherType}
    //             key={day.id}
    //             />
    //     )
    // })


export default dayList;
