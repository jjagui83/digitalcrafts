import React from 'react'
import Exotics from '../garage/Exotics'
import Musclecar from '../garage/Musclecar'
import "../../App.css"





export default function Cars(props) {
    return (
        <div className="box">
            <h1>Cars</h1>
            <Exotics />
            <Musclecar mustang={props.mustang}/>
        </div>
    )
}
