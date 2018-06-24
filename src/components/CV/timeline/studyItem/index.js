import React from 'react';
import './studyItem.css'

const Item = props => (
    <div className="study-items--container">
        <div className="stydy-item--growing"/>
        <p className="study-item--date">{props.item.year}</p>
        <p className="study-item--label">{props.item.label}</p>
        <p className="study-item--detail">{props.item.detail}</p>
        <p className="study-item--where">{props.item.where}</p>
    </div>
);

export default Item;