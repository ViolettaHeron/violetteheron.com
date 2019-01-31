import {OPEN_PROJECT, CLOSE_PROJECT} from './index';

export default actions = (data) => {

    switch (data.type) {
        case OPEN_PROJECT:
        case CLOSE_PROJECT:
        default:
            return false;
    }
};

/*
const fetchOpenProject = data => {
    return false;
};
*/