import React from 'react';
import {SidebarContainer} from "../StyledComponents/SidebarStyle";
import {Link} from "react-router-dom";

export default function Sidebar(props) {
  const viewSidebar = props.viewSidebar
    return (
      <>
       {viewSidebar ?
        <SidebarContainer>
          <Link to="/">
            <p>Home</p>
            </Link>
          <Link to="/dashboard">
          <p>Dashboard</p>
            </Link>
          <Link to="/login">
            <p>Login</p>
            </Link>
            <Link to="/account">
            <p>Account</p>
            </Link>
            <Link to="/garage">
            <p>Garage</p>
            </Link>
        {/* <p>UI Elements</p>
        <p>Charts</p>
        <p>Tables</p> */}



      </SidebarContainer> : ""}
      
      </>
     
    
    );
}
