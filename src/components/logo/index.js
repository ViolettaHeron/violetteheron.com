import React from 'react';
import Ursa  from './ursa-major.svg'
import "./logo.css"

class Logo extends React.Component{
    render = () => (
        <div>
            <img src={Ursa} className="header-logo" alt="logo" />

        </div>
    )

    /*
    * <div>Icons made by <a href="https://www.flaticon.com/authors/smashicons" title="Smashicons">Smashicons</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by
    * <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
    * */
}

export default Logo;