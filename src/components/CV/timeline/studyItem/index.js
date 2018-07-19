import React                from 'react';
import './studyItem.css';
import {connect}            from 'react-redux';
import {bindActionCreators} from 'redux';

class Item extends React.Component {

    render() {
        const props = this.props;

        return (
            <div className="study-items--container">
                <div className="stydy-item--growing"/>
                <p className="study-item--date">{props.item.year}</p>
                <p className="study-item--label">{props.item.label}</p>
                <p className="study-item--detail">{props.item.detail}</p>
                <p className="study-item--where">{props.item.where}</p>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => bindActionCreators(
    {
    }, dispatch);

export default connect(null, mapDispatchToProps)(Item);