import React             from 'react';
import {render}          from 'react-dom';
import {Provider}        from 'react-redux';
import {ConnectedRouter} from 'react-router-redux';
import store, {history}  from './store';
import App               from './containers/app';
import I18n              from 'redux-i18n';
import {translations}    from './translations';

import './index.css';

const target = document.querySelector('#root');

render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <I18n translations={translations} initialLang="fr" >
                <App/>
            </I18n>
        </ConnectedRouter>
    </Provider>,
    target
);