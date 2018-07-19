import {combineReducers} from 'redux';
import {routerReducer}   from 'react-router-redux';
import {i18nState}       from 'redux-i18n';

export default combineReducers(
    {
        routing: routerReducer,
        i18nState
    }
);