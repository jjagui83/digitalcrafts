import React, {useState} from 'react'

export default function FunctionalComponent() {
    const [counter, setCounter] = useState(0)
    const [studentName, setStudentName] = useState("David");
  
    return (
        <div>
            <p>Functional Counter</p>;
            <p>student name is : {studentName}</p>;
            <p>counter is : {counter}</p>;
                <button onClick={() => setCounter(counter + 1)}>Increase</button>
                <button onClick={() => setCounter(counter - 1)}>Decrease</button>
                <button onClick={() => setStudentName("David")}>Change The Student{""}</button>
        </div>
    )
}
