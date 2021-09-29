import React, { Component } from 'react'


export default class Card extends Component {
    state = {
        flipped: false,
      };
      delete = () => {

      }

    
    
      flipFunction = () => {
        this.setState({
          flipped: !this.state.flipped,
        });
      };


    render() {
        const {flipped} = this.state;
        const {name, hp, sprites} = this.props.pokemon;
      
        return (
            <div className="CardData">
                <img src={flipped ? sprites.back : sprites.front} alt="" />
              
                <p>{name.toUpperCase()}</p>
                <p>HP: {hp}</p>
                <button onClick={this.flipFunction}>Pokemon Flip</button>
                <button onClick={() => this.props.onDelete(name)}>Delete</button>
              
           
            </div>

        )
    }
}


    

