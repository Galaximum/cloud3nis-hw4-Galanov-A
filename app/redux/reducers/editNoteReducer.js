import {SET_EDIT_NOTE} from '../../constants/actions';

const defaultState = {
    note: {}
};


const editNote = (state = defaultState, action) => {
    switch (action.type) {
        case SET_EDIT_NOTE: {
            return {note: action.payload};
        }
        default:
            return state;
    }
}

export default editNote;
