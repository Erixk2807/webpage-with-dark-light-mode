import React from 'react';
import Logo from '../images/react-icon-small.png'

const Nav = (props) => {
    return (
        <nav 
        className={props.darkMode ? "dark": ""}
    >
        <img 
            className="nav--logo_icon"
            src={Logo}
        />
        <h3 className="nav--logo_text">ReactFacts</h3>
        
        <div 
            className="toggler" 
        >
            <p className="toggler--light">Light</p>
            <div 
                className="toggler--slider"
                onClick={props.toggleDarkMode}
            >
                <div className="toggler--slider--circle"></div>
            </div>
            <p className="toggler--dark">Dark</p>
        </div>
    </nav>
    );
};

export default Nav;