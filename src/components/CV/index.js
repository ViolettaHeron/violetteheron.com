import React     from 'react';
import {connect} from 'react-redux';
import './CV.css';
import Projects  from './projects';
import Timeline  from './timeline';
import Work      from './work-experience';

class CV extends React.Component {

    render() {

        return (
            <div className="CV-container">
                <div className="CV-thunk">
                    <div className="timeline--container">
                        <Timeline/>
                    </div>
                    <div className="work--container">
                        <Work/>
                    </div>
                </div>
                <div className="CV-thunk">
                    <div className="projects--container">
                        <Projects/>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => (
    {
        ...state
    }
);

export default connect(mapStateToProps)(CV);