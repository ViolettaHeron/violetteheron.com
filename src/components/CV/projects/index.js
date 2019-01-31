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
                    <div onClick={() => this.openOverlay(item.label)} key={i} className="projects--list--single-project">
                        <p className="projects--list--project-title">{item.displayName}</p>
                        {item.tags.map((tag, t) => (<span className="projects--list--project-tag" key={t}>{tag}</span>))}
                    </div>
                ))}
            </div>
            <div className="projects--overlay">

            </div>
        </div>;
    };

    openOverlay = (project) => {
        const {dispatch} = this.props;
        console.log(dispatch);
        console.log(project);
    }
}

// tags
const TAG_GAME   = 'game';
const TAG_JS     = 'native js';
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