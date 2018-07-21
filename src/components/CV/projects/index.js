import React     from 'react';
import {connect} from 'react-redux';

import './projects.css';

class Projects extends React.Component {


    render = () => {
        console.log('Projects loaded');

        return <div className="projects">
            <h2>
                <span className="icon projects--title-icon lnr-magic-wand"/>
                Projets
            </h2>
            <div className="projects--list">
                {this.props.projects.map(item => (
                    <a className="projects--list--single-project" href={'/' + item.label}>{item.displayName}</a>
                ))}
            </div>
        </div>;
    };
}

const mapStateToProps = state => ({
    ...state,
    projects: [
        {
            label      : 'planets',
            displayName: 'Révolution des planètes'
        },
        {
            label      : 'color',
            displayName: 'Color clicker'
        }
    ]
});

export default connect(mapStateToProps)(Projects);