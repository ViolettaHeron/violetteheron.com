import React from 'react';

import './projects.css';

class Projects extends React.Component {


    render = () => {
        console.log('Projects loaded');

        return <div className="projects">
            <h2>
                <span className="icon projects--title-icon lnr-magic-wand"/>
                Projects
            </h2>
        </div>;
    };
}

export default Projects;