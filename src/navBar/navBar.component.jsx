import React from 'react';
import './navBar.styles.css';
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import {faUserCircle} from "@fortawesome/free-regular-svg-icons";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

const NavBar = (props) => {

    return (
        <div className="nav-bar-container">
            <h1>GENOME.</h1>
            <div className="search-bar">
                <input type='search' placeholder="EXPLORE."></input>
                <button>
                <FontAwesomeIcon icon={faSearch} />
                <i class="fas fa-search"></i>
                </button>
            </div>
            <div>
                <FontAwesomeIcon icon={faUserCircle} />
                <button>sign up</button>
            </div>
        </div>
    )
}

export default NavBar;