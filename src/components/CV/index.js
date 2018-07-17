import React        from 'react';
import {connect}    from 'react-redux';
import Timeline     from './timeline';
import Work         from './work-experience';
import './CV.css';

class CV extends React.Component {

    render() {

        return (
            <div className="CV-thunk">
                <div className="timeline--container">
                    <Timeline/>
                </div>
                <div className="work--container">
                    <Work/>
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