import React from 'react'

const head = (props) => {


    return (
        <div>
            <h1 className="siteTitle">Weather App</h1>

            <form action="">
                <input type="text" onChange={props.setLocation}/>
                <input type="button" value="Search" onClick={props.clicked}/>
            </form>
        </div>
    )
}

export default head;
