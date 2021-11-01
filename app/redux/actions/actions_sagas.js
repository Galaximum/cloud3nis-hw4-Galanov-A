import {createAction} from "redux-actions";
import {CREATE_NOTE, DELETE_NOTE, LOAD_NOTES, SET_NOTES, UPDATE_NOTE} from "../../constants/actions";


export const setNotes=createAction(SET_NOTES);
export const loadNotes = createAction(LOAD_NOTES);


export const createNote = createAction(CREATE_NOTE);
export const updateNote = createAction(UPDATE_NOTE);
export const deleteNote = createAction(DELETE_NOTE);
