import React from "react"
import logo from "../images/logo192.png"
import "../style.css"

export default function Navbar() {
    return(
        <nav>
            <img src={logo} className="nav--icon"/>
            <h3 className="nav--image_text">ReactFacts</h3>  
            <h4 className="nav--title">React Course - Project 1</h4>            
        </nav>
    )
}