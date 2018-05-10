import React  from 'react';
import './construction.css';
import Planet from './images/space-station.png';
import Rocket from './images/space-ship.png';
import { localize } from 'redux-i18n';

class Construction extends React.Component {

    render() {


        return (
            <div className="constructing-content">
                <img src={Planet} alt="webpage in construction" className="constructing-content--center-planet"/>
                <div className="constructing-content--spinning-container">
                    <img src={Rocket} alt="webpage in construction rocket"
                         className="constructing-content--spinning-rocket"/>
                </div>
                <p className="constructing-content--text">{this.props.t('Constructing this page !')}</p>
            </div>
        );
    };
}

export default localize('t')(Construction);