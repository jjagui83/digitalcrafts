import React from 'react'
import Grid from './grid.css'

export default function Rows(props) {
    const message = () => {
        console.log("Hello World!")}
    return (
        <div className="grid">
            <div className="row">
               
                  
                <div className="cell" >X</div>
              
                
               
                <div className="cell">X</div>
              
                
               
                <div className="cell">X</div>
            </div>
              
          
            <div className="row">
               
                <div className="cell">X</div>
              
               
                <div className="cell">X</div>
              
               
                <div className="cell">X</div>
                </div>
              
          
            <div className="row">
               
                <div className="cell">X</div>
              
               
                <div className="cell">X</div>
              
               
                <div className="cell">X</div>
            
            </div>
        </div>
              
          
      
    )
}
