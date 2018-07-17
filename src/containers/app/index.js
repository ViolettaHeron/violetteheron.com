import React        from 'react';
import Header       from '../../components/header';
import CV           from '../../components/CV';
import Background from   '../../components/body-background';

import {Route} from 'react-router-dom';


class App extends React.Component {

    render() {

        return (
            <div>
                <main>
                    <Route component={Header}/>
                    <Route exact={true} component={CV}/>
                </main>
                <Background />
            </div>
        );
    }
}

/*
*
*
                <Route exact path="/about-us" component={About}/>
* */

export default App;
