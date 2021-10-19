import React from 'react';
import Card from "./Card";



const student = [
    {name: "Jose"},
    {name: "Britt"},
    {name: "Matt"},
    {name: "Dustin"},
    {name: "Justin"},
    {name: "Kayla"},
    {name: "Deanna"},
    {name: "Cameron"},
    {name: "Tim"},
    {name: "Ron"},
    {name: "Jamie"},
    {name: "Brande"},
    {name: "Jordan"},
    {name: "Xavier"},
 ]


const CardContainer = () => {

    



    return (
        <div>
            <Card student={student}/>
        </div>
    )
}

export default CardContainer


