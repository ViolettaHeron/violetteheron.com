import React from 'react'
import ReactDOM from 'react-dom'

function SvgWithXlink(props) {
    return (
        <svg
            version="1.1"
            id="Capa_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            x="0px" y="0px"
            viewBox="0 0 60 60"
            style={{'enable-background': 'new 0 0 60 60;'}}
            xmlSpace="preserve"
        >
            <g>
                <circle style="fill:#556080;" cx="30" cy="30" r="30"/>
                <g>
                    <circle className="star star-1" style="fill:#F3D55B;" cx="11" cy="54" r="1"/>
                    <circle className="star star-2" style="fill:#F3D55B;" cx="6" cy="26" r="1"/>
                    <circle className="star star-1" style="fill:#F3D55B;" cx="26" cy="25" r="1"/>
                    <circle className="star star-2" style="fill:#F3D55B;" cx="48" cy="6" r="1"/>
                    <circle className="star star-1" style="fill:#F3D55B;" cx="53" cy="26" r="1"/>
                </g>
                <circle style="fill:#8697CB;" cx="53" cy="42" r="4"/>
                <circle style="fill:#8697CB;" cx="40.272" cy="55" r="4"/>
                <circle style="fill:#8697CB;" cx="25" cy="39" r="4"/>
                <circle style="fill:#8697CB;" cx="37.444" cy="26" r="5"/>

                <line style="fill:none;stroke:#8697CB;stroke-width:2;stroke-linecap:round;stroke-miterlimit:10;"
                      x1="34.302" y1="29.857" x2="27.9" y2="36.259"/>

                <line style="fill:none;stroke:#8697CB;stroke-width:2;stroke-linecap:round;stroke-miterlimit:10;"
                      x1="50.049" y1="39.321" x2="40.585" y2="29.857"/>

                <line style="fill:none;stroke:#8697CB;stroke-width:2;stroke-linecap:round;stroke-miterlimit:10;"
                      x1="43.101" y1="52.172" x2="50.321" y2="44.951"/>
                <polyline style="fill:none;stroke:#8697CB;stroke-width:2;stroke-linecap:round;stroke-miterlimit:10;"
                          points="27.428,42.156
		37.444,52.172 37.444,52.172 	"/>
                <circle style="fill:#8697CB;" cx="25" cy="10" r="3"/>
                <circle style="fill:#8697CB;" cx="6" cy="6" r="3"/>

                <line style="fill:none;stroke:#8697CB;stroke-width:2;stroke-linecap:round;stroke-miterlimit:10;" x1="37"
                      y1="23" x2="27" y2="12"/>
                <line style="fill:none;stroke:#8697CB;stroke-width:2;stroke-linecap:round;stroke-miterlimit:10;" x1="22"
                      y1="9" x2="9" y2="6"/>
                <circle className="star star-1" style="fill:#F3D55B;" cx="25" cy="39" r="2.586"/>
                <circle className="star star-2" style="fill:#F3D55B;" cx="40.272" cy="55" r="2.586"/>
                <circle className="star star-1" style="fill:#F3D55B;" cx="53" cy="42" r="1.879"/>
                <circle className="star star-2" style="fill:#F3D55B;" cx="37.444" cy="26" r="2.879"/>
                <circle className="star star-1" style="fill:#F3D55B;" cx="25" cy="10" r="1"/>
                <circle className="star star-2" style="fill:#F3D55B;" cx="6" cy="6" r="1"/>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
        </svg>

    );
}

ReactDOM.render(<SvgWithXlink fill="violet" />, document.querySelector('body > div'));
