import React from "react";


export default function TodoItems (props) {
    const {list} = props;
    return (
        <div>
            <h1>Your Todo List </h1>
            <ul>
            {list.map((todo) => (
                <li>{todo}</li>
            ))}

            </ul>
            
        </div>
    )

}
 