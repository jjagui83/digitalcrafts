import React, { Component } from 'react'
import './car.css'

export default class CarCard extends Component {
    state = {Bugatti:{


    make: "Bugatti",
    model: "La voiture noire",
    engine: "v16",
    horsepower: "1500",
    price: "19000000",
    image: [
      {
        primary: "https://uncrate.com/p/2021/06/bugatti-la-voiture-noire-1.jpg",
        secondary:
          "https://assets.newatlas.com/dims4/default/f863a29/2147483647/strip/true/crop/1920x1029+0+0/resize/1440x772!/quality/90/?url=http%3A%2F%2Fnewatlas-brightspot.s3.amazonaws.com%2Farchive%2Fbugatti-la-voiture-noire-21.jpeg",
      },
    ],
    transmission: "7 speed dual clutch",
    topSpeed: [{ US: "261", Metric: "420" }],
    changeImage: true,
carpic: "https://uncrate.com/p/2021/06/bugatti-la-voiture-noire-1.jpg"
},

    };
    
  FlipImage = () => {
      let photo = this.state.changeImage ? this.state.Bugatti.image[0].primary: this.state.Bugatti.image[0].secondary;
    

      this.setState({carpic: photo, changeImage: !this.state.changeImage})

  }

    render() {
        return (
            <div className="Body">
                 <div className="carDiv">
                
                    <img src={this.state.Bugatti.image[0].primary}></img>
                    <ul className="Points">
                        <li>{this.state.Bugatti.make}</li>
                        <li>{this.state.Bugatti.model}</li>
                        <li>{this.state.Bugatti.engine}</li>
                        <li>{this.state.Bugatti.horsepower
                        }</li>
                        <li>{this.state.Bugatti.price}</li>
                        
                        <li>{this.state.Bugatti.transmission}</li>
                        <li>{this.state.Bugatti.topSpeed[0].US}</li>
                        </ul>
                        <button onClick={this.FlipImage}>Flip Image</button>

                    <img src={this.state.Bugatti.image[0].primary}></img>
                    <ul className="Points">
                        <li>{this.state.Bugatti.make}</li>
                        <li>{this.state.Bugatti.model}</li>
                        <li>{this.state.Bugatti.engine}</li>
                        <li>{this.state.Bugatti.horsepower
                        }</li>
                        <li>{this.state.Bugatti.price}</li>
                        
                        <li>{this.state.Bugatti.transmission}</li>
                        <li>{this.state.Bugatti.topSpeed[0].US}</li>
                        </ul>
                    

                    <img src={this.state.Bugatti.image[0].primary}></img>
                    <ul className="Points">
                        <li>{this.state.Bugatti.make}</li>
                        <li>{this.state.Bugatti.model}</li>
                        <li>{this.state.Bugatti.engine}</li>
                        <li>{this.state.Bugatti.horsepower
                        }</li>
                        <li>{this.state.Bugatti.price}</li>
                        
                        <li>{this.state.Bugatti.transmission}</li>
                        <li>{this.state.Bugatti.topSpeed[0].US}</li>
                        </ul>
                    


                    <img src={this.state.Bugatti.image[0].primary}></img>
                    <ul className="Points">
                        <li>{this.state.Bugatti.make}</li>
                        <li>{this.state.Bugatti.model}</li>
                        <li>{this.state.Bugatti.engine}</li>
                        <li>{this.state.Bugatti.horsepower
                        }</li>
                        <li>{this.state.Bugatti.price}</li>
                        
                        <li>{this.state.Bugatti.transmission}</li>
                        <li>{this.state.Bugatti.topSpeed[0].US}</li>
                        </ul>
                        

                        <img src={this.state.Bugatti.image[0].primary}></img>
                    <ul className="Points">
                        <li>{this.state.Bugatti.make}</li>
                        <li>{this.state.Bugatti.model}</li>
                        <li>{this.state.Bugatti.engine}</li>
                        <li>{this.state.Bugatti.horsepower
                        }</li>
                        <li>{this.state.Bugatti.price}</li>
                        
                        <li>{this.state.Bugatti.transmission}</li>
                        <li>{this.state.Bugatti.topSpeed[0].US}</li>
                        </ul>
                        

                    

                    </div>
            </div>   
        )
    }
}
