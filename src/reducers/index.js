import {combineReducers} from 'redux';
import {routerReducer}   from 'react-router-redux';
import {i18nState}       from 'redux-i18n';
import studies           from './studies';

export default combineReducers(
    {
        routing: routerReducer,
        studies,
        i18nState
    }
);