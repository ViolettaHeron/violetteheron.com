import React      from 'react';
import spaceShip  from './images/space-ship.svg';
import {connect}  from 'react-redux';
import Item       from './studyItem';
import './timeline.css';
import {timeline} from '../../../initialState';
import {fetchOpenItem} from '../../../reducers/studies'

class Timeline extends React.Component {

    shouldComponentUpdate(nextProps) {
        // console.log(nextProps);
        return this.props.item !== nextProps.item;
    }

    render() {
        console.log(this.props);

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

const mapStateToProps = state => {
    const {item} = fetchOpenItem;

    return {
        ...state,
        'item' : item,
        'studies': [
            {
                'year'  : '2015-2018',
                'label' : 'Licence informatique',
                'detail': 'Sciences fondamentales',
                'where' : 'Campus Valrose, Nice',
                'id'    : timeline.TIMELINE_ITEM_LIC
            },
            {
                'year'  : '2013-2015',
                'label' : 'DUT Informatique',
                'detail': '',
                'where' : 'Campus Constellations, Nice',
                'id'    : timeline.TIMELINE_ITEM_DUT
            },
            {
                'year'  : '2013',
                'label' : 'Baccalauréat Série S',
                'detail': 'Spécialité mathématiques',
                'where' : 'H. D\'Estienne d\'Orves, Nice',
                'id'    : timeline.TIMELINE_ITEM_BAC
            },
            {
                'year'  : '2010',
                'label' : 'Brevet des collèges',
                'detail': 'Option latin',
                'where' : 'Collège Bréa, St Martin',
                'id'    : timeline.TIMELINE_ITEM_BRE
            }
        ]
    };
};

export default connect(mapStateToProps)(Timeline);