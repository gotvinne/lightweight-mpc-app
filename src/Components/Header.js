import React from "react";
import { AppBar, Tab, Tabs, Toolbar } from "@mui/material";
import '../css/Header.css'
import logo from '../img/equinor_logo.jpg'

const ImageStyle = {height: "75px", width: "75px", transform: "translate(750px, 18px)"}  
const Pages = ["Simulation", "Results", "Algorithm", "Models", "about"];

function Header() {
    return (
        <React.Fragment>
            <div className="Header">
                <h1> Light Weight MPC </h1>
                <img src={logo} alt='Equinor logo'
                    style={ImageStyle}
                ></img>
            </div>
            <AppBar position="BOTTOM" sx={{height: 50, background: "#b4b4b4"}}>
                <Toolbar>
                    <Tabs>
                        <Tab label={Pages[0]} />
                        <Tab label={Pages[1]} />
                        <Tab label={Pages[2]} />
                        <Tab label={Pages[3]} />
                        <Tab label={Pages[4]} />
                    </Tabs>
                </Toolbar>
            </AppBar>
        </React.Fragment>
    )
}

// BOTTOM: Place it on the Bottom of this element
// sx = style
export default Header


{/* <div className="Header">
                <h1> Light Weight MPC </h1>
                <img src={logo} alt='Equinor logo'
                    style={ImageStyle}
                ></img>
            </div> */}