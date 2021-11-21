import React from 'react'


export default function Students(props) {
    return (
        <div>
            <h1>{props?.student.name}</h1>
            <h2>{props?.student.item}</h2>
            <h2>{props?.student.price}</h2>
            
        </div>
    )
}
