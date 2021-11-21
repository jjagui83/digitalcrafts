import React from 'react'
// import Plot from "react-plotly.js";
import WorkOrders from './WorkOrders';
import { MainContainer } from "../StyledComponents/DashboardStyle"
import BarChart from './DashboardGraph/BarChart';

export default function Dashboard() {
    return (
        <MainContainer>
            <div>
               <BarChart />
            </div>
            <div>
                <WorkOrders />
            </div>
            
        </MainContainer>
    )
}
