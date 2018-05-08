import React  from 'react';
import Logo   from '../../components/logo';
import {Link} from 'react-router-dom';
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
                    <nav className="general-header--menu">
                        <Link to="/">Home</Link>
                        <Link to="/projects">Projects</Link>
                        <Link to="/CV">CV</Link>
                        <a href="https://github.com/VioletteHeron/" target="_blank">Github</a>
                    </nav>
                </div>
            </header>
        );
    }
}

export default Header;