import React      from 'react';
import classNames from 'classnames';
import './shiny-component.css';

class ShinyComponent extends React.Component {


    render() {

        const containerClass     = classNames(
            {
                'shiny-component'  : true,
                'rescale-on-hover' : this.props.scaleOnHover,
                'with-shadow'      : this.props.shadow,
                'is-call-to-action': this.props.isCallToAction

            }, this.props.className
        );
        const ContainedComponent = this.props.component;
        const bgColor            = this.props.backgroundColor ? this.props.backgroundColor : null;

        return (<div className={containerClass} style={{backgroundColor: bgColor}}>
            <ContainedComponent/>
        </div>);
    }
}

export default ShinyComponent;