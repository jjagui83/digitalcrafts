import React from 'react'
import "../../App.css"


export default function (props) {
    return (
        <div className="box">
            <h1>Musclecars</h1>
            <p>{props.mustang}</p>
        </div>
    )
}
