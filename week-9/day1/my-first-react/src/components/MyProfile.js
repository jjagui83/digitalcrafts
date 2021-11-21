import React, { Component } from 'react'

export default class MyProfile extends Component {
    state = {
        firstName: "Jose",
        lastName: "Aguilar",
        city: "Houston",
        profilePic: "https://vetstreet.brightspotcdn.com/dims4/default/1020ad3/2147483647/crop/696x410%2B0%2B29/resize/645x380/quality/90/?url=https%3A%2F%2Fvetstreet-brightspot.s3.amazonaws.com%2Fc6%2Fd9%2F5a1117354115962444019a2a10c1%2Fgerman-shepherd-ap-lkwegz.jpg"
    };

    ChangeCity =() => {
        let cityChange = "Chicago";
         this.setState({ city: cityChange});
     }

    render() {
        return (
            <div>
                <p>My first name is : {this.state.firstName}</p>
                <p>My last name is : {this.state.lastName}</p>
                <p>I live in : {this.state.city}</p>
                  <img src={this.state.profilePic}></img>    
                <button onClick={this.ChangeCity}>Change City</button>          
            </div>
        )
    }
}
