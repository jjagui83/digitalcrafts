import React from 'react'
import Garage from "../garage/Garage"
import "../../App.css"
export default function House(props) {
    return (
        <div className="box">
            <h1>House</h1>
            <Garage  mustang={props.mustang}/>
        </div>
    )
}
