import React     from 'react';
import {connect} from 'react-redux';

import './projects.css';

class Projects extends React.Component {


    render = () => {
        return <div className="projects">
            <h2>
                <span className="icon projects--title-icon lnr-magic-wand"/>
                Projets
            </h2>
            <div className="projects--list">
                {this.props.projects.map((item, i) => (
                    <div key={i} className="projects--list--single-project">{item.displayName}</div>
                ))}
            </div>
        </div>;
    };
}

// tags
const TAG_GAME   = 'game';
const TAG_JS     = 'js';
const TAG_CSS    = 'css';
const TAG_SMALL  = 'small';
const TAG_CANVAS = 'canvas';

const mapStateToProps = state => ({
    ...state,
    projects: [
        {
            label      : 'planets',
            displayName: 'Révolution des planètes',
            tags       : [TAG_SMALL, TAG_JS, TAG_CANVAS]
        },
        {
            label      : 'color',
            displayName: 'Color clicker',
            tags       : [TAG_GAME, TAG_CSS, TAG_JS]
        }
    ]
});

export default connect(mapStateToProps)(Projects);

// sky color: hsl(271,91%,5%)