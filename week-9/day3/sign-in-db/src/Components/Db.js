import React from "react";
import "./Db.css"

export default function DB (props) {
    const { data } = props

    return (
        <div className="DbContainer">
            <h1>Data</h1>
            <div className="DataContainer">
            <ul>{data?.map((users) => (
                <li>{users}</li>
            ))}</ul>
            </div>
        </div>
    )
}

