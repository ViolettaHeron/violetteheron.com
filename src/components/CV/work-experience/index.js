import React     from 'react';
import {connect} from 'react-redux';
import './work-experience.css';


class Work extends React.Component {


    render() {
        const experience = this.props.work;


        return (
            <div className="jobs--container">
                <h2>Expérience professionnelle</h2>
                {experience.map((item, i) => (
                    <div className="job--container" key={i}>
                        <div className="jobs--date-container">
                            <p className="job--when">{item.when}</p>
                        </div>
                        <div className="jobs--description-container">
                            <p className="job--label">{item.label}</p>

                            <p className="job--description job--compagny">{item.compagny}</p>
                            <p className="job--description job--where">{item.where}</p>
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
            'when'        : 'Juillet 2014',
            'label'       : 'Surveillance de Musée',
            'contractType': 'CDD',
            'duration'    : '1 mois',
            'where'       : 'Nice',
            'compagny'    : 'Galerie de la Marine'
        }, {
            'when'        : '2014',
            'label'       : 'Developpeuse Front Junior',
            'contractType': 'Stage',
            'duration'    : '6 mois',
            'where'       : 'Nice',
            'compagny'    : 'Qwant'
        }, {
            'when'        : '2015-2016',
            'label'       : 'Developpeuse Fullstack',
            'contractType': 'Stage temps partiel',
            'duration'    : '9 mois',
            'where'       : 'Nice',
            'compagny'    : 'Qwant'
        }, {
            'when'        : '2016-2017',
            'label'       : 'Developpeuse Fullstack',
            'contractType': 'CDD temps plein',
            'duration'    : '1 an',
            'where'       : 'Nice',
            'compagny'    : 'Qwant'
        }, {
            'when'        : '2017-2018',
            'label'       : 'Developpeuse Fullstack',
            'contractType': 'Stage temps partiel',
            'duration'    : '9 mois',
            'where'       : 'Nice',
            'compagny'    : 'Qwant'
        }
    ]
});

export default connect(mapStateToProps)(Work);