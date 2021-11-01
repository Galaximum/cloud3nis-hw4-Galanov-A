import {SET_DETAIL_NOTE} from '../../constants/actions';

const defaultState = {
    note: {}
};


const noteDetail = (state = defaultState, action) => {
    switch (action.type) {
        case SET_DETAIL_NOTE: {
            return {note: action.payload};
        }
        default:
            return state;
    }
}

export default noteDetail;
