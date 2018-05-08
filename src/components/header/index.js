import React  from 'react';
import Logo   from '../../components/logo';
import {Link} from 'react-router-dom';
import './header.css'

class Header extends React.Component {

    render() {
        return (
            <header className="general-header">
                <Logo/>
                <nav className="header-menu">
                    <Link to="/">Home</Link>
                    <Link to="/about-us">About</Link>
                </nav>
            </header>
        );
    }
}

export default Header;