import React from 'react';
import './navBar.styles.scss';
import {faDna, faSearch } from "@fortawesome/free-solid-svg-icons";
import {faUserCircle, faUser} from "@fortawesome/free-regular-svg-icons";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

const NavBar = (props) => {

    return (
        <div className="nav-bar-container">
            <div className="nav-bar">
                <h1>GENOME.</h1>
                <div className="menu-icons">
                    {/* <div class="container">
                        <input type="text" placeholder="EXPLORE."/>
                        <div class="search"></div>
                    </div> */}
                    {/* {/* <FontAwesomeIcon icon={faUser} /> */}
                    <ul >
                        <li><FontAwesomeIcon className="dropdown"icon={faDna} /> 
                            <ul className='dropdown-menu'>
                                <li>Profile</li>
                                <li>Settings</li>
                                <li>Sign Up/Log In</li>
                            </ul>
                        </li>

                    </ul>
                </div>           
            </div>
        </div>
    )
}

export default NavBar;