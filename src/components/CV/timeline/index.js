import React     from 'react';
import spaceShip from './images/space-ship.svg';
import {connect} from 'react-redux';
import Item      from './studyItem';
import './timeline.css';

class Timeline extends React.Component {

    render() {
        this.props.studies.reverse();
        console.log(this.props.studies.reverse());

        return (
            <div className="timeline">
                <div className="timeline--spaceship-container">
                    <img src={spaceShip} alt="space ship"/>
                </div>
                <h2 className="timeline--title">Etudes</h2>
                <div className="timeline--items-container">
                    {this.props.studies.map((item, i) => (
                        <div key={i} className="timeline--item">
                            <Item item={item}/>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    ...state,
    'studies': [
        {
            'year'  : '2015-2018',
            'label' : 'Licence informatique',
            'detail': 'Sciences fondamentales',
            'where' : 'Campus Valrose, Nice'
        },
        {
            'year'  : '2013-2015',
            'label' : 'DUT Informatique',
            'detail': '',
            'where' : 'Campus Constellations, Nice'
        },
        {
            'year'  : '2013',
            'label' : 'Baccalauréat Série S',
            'detail': 'Spécialité mathématiques',
            'where' : 'H. D\'Estienne d\'Orves, Nice'
        },
        {
            'year'  : '2010',
            'label' : 'Brevet des collèges',
            'detail': 'Option latin',
            'where' : 'Collège Bréa, St Martin'
        }
    ]
});

export default connect(mapStateToProps)(Timeline);