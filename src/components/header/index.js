import React from 'react';
import Logo  from '../../components/logo';
import './header.css';

class Header extends React.Component {

    render() {

        return (
            <header className="general-header--container">
                <div className="general-header">
                    <div className="general-header--title-container">
                        <div className="general-header--title--logo">
                            <Logo/>
                        </div>
                        <h1 className="general-header--title">Violette Héron</h1>
                    </div>
                </div>
            </header>
        );
    }
}

/*

import {NavLink} from 'react-router-dom';

    <nav className="general-header--menu">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/projects">Projects</NavLink>
        <NavLink to="/CV">CV</NavLink>
        <a href="https://github.com/VioletteHeron/" target="_blank" rel="noopener noreferrer">Github</a>
    </nav>


 */

export default Header;