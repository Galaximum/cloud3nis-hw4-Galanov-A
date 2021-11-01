import {ADD_NEW_NOTE, EDIT_NOTE, REMOVE_CURRENT_NOTE, SET_NOTES} from '../../constants/actions';
import moment from "moment";

const defaultState = {
    notes: []
};

const sortFunc = (a, b) => {
    if (moment(a.lastDate).isBefore(b.lastDate)) {
        return 1;
    } else {
        return -1;
    }
};

const content = (state = defaultState, action) => {
    switch (action.type) {
        case SET_NOTES: {
            return {...state, notes: action.payload.sort(sortFunc)}
        }
        case ADD_NEW_NOTE: {
            return {...state, notes: [action.payload, ...state.notes].sort(sortFunc)}
        }
        case EDIT_NOTE: {
            let note = action.payload;
            state.notes.map((elem) => {
                if (elem.id === note.id) {
                    elem.name = note.name;
                    elem.title = note.title;
                    elem.description = note.description;
                    elem.lastDate = moment().format();
                } else return elem;
            });
            return {...state, notes: [...state.notes].sort(sortFunc)}
        }
        case REMOVE_CURRENT_NOTE: {
            state.notes.splice(state.notes.indexOf(action.payload), 1)
            return {...state, notes: [...state.notes].sort(sortFunc)}
        }
        default:
            return state;
    }
}

export default content;
