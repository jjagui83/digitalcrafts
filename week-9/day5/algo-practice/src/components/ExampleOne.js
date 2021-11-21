import React from 'react';
import ListOfName from './ListOfName';
import {useState} from 'react';



export default function ExampleOne(){
    const [userName, setuserName] = useState("");
    const [listOfNames, setlistOfNames] = useState([]);
    const list = listOfNames;
    
    return(
        <div>
            <label>Enter your name:</label>
            <input onChange={(e)=> setuserName({...userName, [e.target.name]: e.target.value})}
                name="name"
                type="text"
                placeholder="Name"
            />
            <button onClick={( )=> setlistOfNames([...listOfNames, userName])}>
                Submit
            </button>
            
            <ListOfName list={[userName]} />
        </div>
    )
}