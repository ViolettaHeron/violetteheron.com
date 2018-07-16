export const OPEN_ITEM  = 'studies/OPEN_ITEM';
export const CLOSE_ITEM = 'studies/CLOSE_ITEM';

export default (state = {}, action) => {
    switch (action.type) {
        case(OPEN_ITEM):
        case(CLOSE_ITEM):
            return {
                ...state,
                type: action.type,
                item: action.item
            };
        default:
            return state;
    }
}

export const fetchOpenItem = (label) => {
    return dispatch => {
        dispatch(
            {
                type: OPEN_ITEM,
                item: label
            });
    };
};
