import React from 'react'
import { BannerContainer } from '../StyledComponents/AppHeader'
import {Link} from "react-router-dom"
// import 'bootstrap/dist/css/bootstrap.css'
// import { Nav, Navbar, NavDropdown } from 'react-bootstrap'

export default function Header() {
    return (
        <BannerContainer>
            <navbar>
            <Link to="/">
                <p>Timeless Grails</p>
            </Link>
            <Link to="/fitteds">
                <p>Fitteds</p>
            </Link>
            <Link to="/acessories">
                <p>Accessories</p>
            </Link>
            <Link to="/cart">
                <p>Cart</p>
            </Link>
            </navbar>
        </BannerContainer>
    )
}
<nav className="nav-wrapper">
<div className="container">
    <Link to="/" className="brand-logo">Home</Link>
    
    <ul className="right">
        <li><Link to="/fitteds">Fittedsd</Link></li>
        <li><Link to="/cart">My cart</Link></li>
        <li><Link to="/acessories"><i className="material-icons">Accessories</i></Link></li>
    </ul>
</div>
</nav>