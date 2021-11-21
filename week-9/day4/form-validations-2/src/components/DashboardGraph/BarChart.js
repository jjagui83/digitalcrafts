import React from 'react'
import Plot from "react-plotly.js";




export default function BarChart() {
    const data = [
        {
            x:["Comedy", "Action", "Romance", "Drama","Scifi"],
            y:[4,5,6,3,8],
            type: "bar",
        },
    ];
    return (
        <div>
            <Plot data={data} layout={{title: "Graph Test"}} />
        </div>
    );
}
