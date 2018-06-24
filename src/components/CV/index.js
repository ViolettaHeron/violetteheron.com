import React        from 'react';
import {connect}    from 'react-redux';
import Timeline     from './timeline';
import Work         from './work-experience';
import Construction from '../construction';
import './CV.css';

class CV extends React.Component {

    render() {

        return (
            <div className="CV-container">
                <div className="CV-thunk">
                    <div className="timeline--container">
                        <Timeline/>
                    </div>
                    <div><Construction/></div>
                </div>
                <div className="CV-thunk">
                    <div className="work--container">
                        <Work/>
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