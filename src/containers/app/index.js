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
                    <Route exact={true} path="/" component={CV}/>
                </main>
                <Route Route exact={true} path="/" component={Background}/>
            </div>
        );
    }
}

/*
                <Route exact path="/about-us" component={About}/>
* */

export default App;
