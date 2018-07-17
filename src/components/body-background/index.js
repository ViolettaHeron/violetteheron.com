import React from 'react';
import './body-background.css';

const Background = props => (
    <div className="background--container">
        <div className="background-mountain background--mountain-1" />
        <div className="background-mountain background--mountain-2" />
        <div className="background-mountain background--mountain-3" />

        <div className="background-cloud background--cloud-1" />
        <div className="background-cloud background--cloud-2" />
    </div>
);

export default Background;