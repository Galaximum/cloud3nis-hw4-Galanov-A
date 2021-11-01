import {combineReducers} from "redux";
import navReducer from "./navReducer";
import contentReducer from "./contentReducer";
import noteDetailReducer from "./noteDetailReducer";
import editNoteReducer from "./editNoteReducer";

export default combineReducers(
    {
        nav: navReducer,
        content: contentReducer,
        detail: noteDetailReducer,
        edit: editNoteReducer
    });


