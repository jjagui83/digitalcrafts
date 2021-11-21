import React, {Component} from "react";
import Room from "./Room";
import "./Building.css";

export default class House extends
Component {
    state = {
        peopleAreHome: false,
    };
    weAreHome = () => {
        this.setState({ peopleAreHome: !this.state.peopleAreHome});

    };
    render() {
        const {couch, chair, tv} = this.props;
 
        return(
            <div className="House"> 
                <h1>House</h1>
                <h1>People {this.state.peopleAreHome ? "are" : "aren't"} Home</h1>
                    
                        <Room furniture={couch} />
                        <Room furniture={chair}/>
                        <Room weAreHome={this.weAreHome} furniture={tv}/>
                    
            </div>
        )
    }
}