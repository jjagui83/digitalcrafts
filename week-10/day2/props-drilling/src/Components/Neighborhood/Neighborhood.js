import React from 'react'
import House from '../House/House'
import "../../App.css"
export default function Neighborhood(props) {
    return (
        <div className="box">
            <h1>Neighborhood</h1>
            <House mustang={props.mustang}/>
        </div>
    )
}
