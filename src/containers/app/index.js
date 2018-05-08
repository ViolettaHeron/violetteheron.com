import React  from 'react';
import Header from '../../components/header';
import './App.css';

import {Route} from 'react-router-dom';


class App extends React.Component {

    render() {

        return (
            <div>
                <main>
                    <Route path="/*" component={Header}/>

                </main>
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
