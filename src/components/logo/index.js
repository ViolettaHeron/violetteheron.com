import React from 'react';
import './logo.css';
import Sun   from './sun.svg';

class Logo extends React.Component{
    render = () => (
        <div>
            <img src={Sun} className="header-logo" alt="logo" />

        </div>
    )

    /*
    * <div>Icons made by <a href="https://www.flaticon.com/authors/smashicons" title="Smashicons">Smashicons</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by
    * <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
    * https://linearicons.com/
    * */
}

export default Logo;