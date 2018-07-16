import React          from 'react';
import {connect}      from 'react-redux';
import ShinyComponent from '../../shiny-container';
import './work-experience.css';

class Work extends React.Component {

    render() {

        const experience = this.props.work;
        return (
            <div className="jobs--container">
                <h2>Expérience professionnelle</h2>
                {experience.map((item, i) => (
                    <div className="job--container" key={i}>
                        <ShinyComponent
                            component={() => (<p className="job--when">{item.when}</p>)}
                            className="jobs--date-container"
                            scaleOnHover={true}
                            isCallToAction={true}
                            shadow={true}/>
                        <div className="jobs--description-container">
                            <p className="job--label">{item.label}</p>
                            <p className="job--description job--compagny">{item.compagny}</p>
                            <p className="job--description job--where">{item.where}</p>
                            <br/>
                            <p className="job--description job--details">{item.contractType}</p>
                            <p className="job--description job--duration">{item.duration}</p>

                        </div>
                    </div>
                ))}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    ...state,
    'work': [
        {
            'when'        : '2015-2018',
            'label'       : 'Developpeuse Fullstack',
            'contractType': 'Temps partiel',
            'duration'    : '9 mois',
            'where'       : 'Nice',
            'compagny'    : 'Qwant'
        }, {
            'when'        : '2015',
            'label'       : 'Developpeuse Front Junior',
            'contractType': 'Stage',
            'duration'    : '6 mois',
            'where'       : 'Nice',
            'compagny'    : 'Qwant'
        }, {
            'when'        : 'Juillet 2014',
            'label'       : 'Surveillance de Musée',
            'contractType': 'CDD',
            'duration'    : '1 mois',
            'where'       : 'Nice',
            'compagny'    : 'Galerie de la Marine'
        }
    ]
});

export default connect(mapStateToProps)(Work);