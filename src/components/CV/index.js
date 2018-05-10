import React   from 'react';
import {connect} from 'react-redux';
import './CV.css';
import Timeline from './timeline';

class CV extends React.Component {


    render() {

        return (
            <div className="CV-container">
                <div className="timeline--container">
                    <Timeline />
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