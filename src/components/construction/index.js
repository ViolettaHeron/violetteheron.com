import React  from 'react';
import './construction.css';
import Planet   from './images/planet.png';
import Rocket from './images/space-ship.png';

class Construction extends React.Component {


    render () {


        return (
            <div className="constructing-content">
                <img src={Planet} alt="webpage in construction" className="constructing-content--center-planet"/>
                <div className="constructing-content--spinning-container">
                    <img src={Rocket} alt="webpage in construction rocket" className="constructing-content--spinning-rocket"/>
                </div>
                <p className="constructing-content--text">Page en construction</p>
            </div>
        );
    };
}

export default Construction;