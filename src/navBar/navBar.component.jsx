import React from 'react';
import './navBar.styles.css';

const NavBar = (props) => {

    return (
        <div className="nav-bar-container">
            <h1>GENOME.</h1>
            <div className="search-bar">
                <input type='search' placeholder="search"></input>
                <button>search.</button>
            </div>
            <div>DropDown</div>
        </div>
    )
}

export default NavBar;