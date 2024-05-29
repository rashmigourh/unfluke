import React, { useState } from 'react'
import "../navbar/navbar.css"
import Avatar from "react-avatar"
import { FaBars } from "react-icons/fa"
import Logo from "../../assets/logo.png"
import { IoIosNotifications,IoMdArrowDropdown } from "react-icons/io";
import { FaBitcoin } from "react-icons/fa";
import { SiWindows11 } from "react-icons/si";
function Navbar() {
    const [menuBar, setMenuBar] = useState(false);

    return (
        <div id='nav'>
            {/* middle_container */}
            <div className="mid_head">
                <div className="logo">
                    <img src={Logo} alt="unfluke" />
                </div>

                <div className="icons_container">
                    <div className="icon"> 
                    <IoIosNotifications className='iconLogo' style={{color:'gold'}}/>
                    <IoMdArrowDropdown style={{fontSize:'3rem'}}/>
                    </div>
                    <div className="icon" >
                    <FaBitcoin style={{color:'gold'}}/>
                    <p style={{fontSize:'3rem'}}>0</p>
                    </div>
                    <div className="icon">
                    <Avatar src="https://img.freepik.com/premium-photo/bearded-man-illustration_665280-67047.jpg" size={68} round={true} className='avatar'/>
                    <IoMdArrowDropdown style={{fontSize:'3rem'}}/>
                    </div>
                </div>
            </div>

            {/* bottom_container */}
            <div className="navbar">
                <div className={menuBar ? "nav_links active" : "nav_links"}>
                    <a href='#' style={{display:'flex, gap:"1rem'}}><SiWindows11 /> LeaderBoard</a>
                    <a href='#'>Historical Trading <IoMdArrowDropdown /></a>
                    <a href='#'>Historical Chart</a>
                    <a href='#'>Scanners</a>
                    <a href='#'>Alerts</a>
                    <a>Basic Backtest</a>
                    <a href='#'>Advanced Backtest</a>
                    <a href="#">Pricing</a>
                    <a href="#">My Earnings</a>
                </div>
                <div id="menu_bar" onClick={() => setMenuBar(!menuBar)}>
                    <FaBars />
                </div>
            </div>

        </div>
    )
}

export default Navbar
