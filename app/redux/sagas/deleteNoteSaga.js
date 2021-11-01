import {takeLatest, call, put} from 'redux-saga/effects'
import {deleteNote} from '../api/api'
import {DELETE_NOTE} from "../../constants/actions";
import {removeNote} from "../actions/actions_reducers";

export function* deleteNoteWatcher() {
    yield takeLatest(DELETE_NOTE, deleteNoteFlow)
}

function* deleteNoteFlow(action) {
    const status = yield call(deleteNote, action.payload.id);
    console.log("Отправлен метод делете с контентом")
    console.log(action.payload)
    console.log("Ответ")
    console.log(status)

    if (status === 200) {
        console.log("Вызван внутренний метод по удалению заметки")
        yield put(removeNote(action.payload))
    }
}
