import React   from 'react';
import {connect} from 'react-redux';
import './CV.css';
import Timeline from './timeline';
import Work from "./work-experience"

class CV extends React.Component {


    render() {

        return (
            <div className="CV-container">
                <div className="timeline--container">
                    <Timeline />
                </div>
                <div className="work--container">
                    <Work />
                </div>

            </div>
        );
    }
}

const mapStateToProps = state => (
    {
        ...state,
        studies: []
    }
);

export default connect(mapStateToProps)(CV);