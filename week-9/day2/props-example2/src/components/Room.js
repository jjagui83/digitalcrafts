import React, { Component } from 'react'
import "./Building.css";
export default class Room extends Component {
    render() {

        const {furniture, weAreHome} = this.props
        return (
            <div className="Room">
                <h1>Room</h1>
                {furniture}
                <button onClick={weAreHome}>People are home {}</button>
              
            </div>
        )
    }
}
