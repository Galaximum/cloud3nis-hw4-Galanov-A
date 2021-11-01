import {createAction} from "redux-actions";
import {
    ADD_NEW_NOTE,
    EDIT_NOTE,
    REMOVE_CURRENT_NOTE,
    SET_DETAIL_NOTE,
    SET_EDIT_NOTE
} from "../../constants/actions";

export const setDetailNote = createAction(SET_DETAIL_NOTE);
export const setEditNote = createAction(SET_EDIT_NOTE);
export const addNewNote = createAction(ADD_NEW_NOTE);
export const editNote = createAction(EDIT_NOTE);
export const removeNote = createAction(REMOVE_CURRENT_NOTE);
