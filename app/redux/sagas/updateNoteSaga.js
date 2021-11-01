import {takeLatest, call, put} from 'redux-saga/effects'
import {updateNote} from '../api/api'
import {UPDATE_NOTE} from "../../constants/actions";
import {editNote} from "../actions/actions_reducers";

export function* updateNoteWatcher() {
    yield takeLatest(UPDATE_NOTE, updateNoteFlow)
}

function* updateNoteFlow(action) {
    const status = yield call(updateNote, action.payload)
    console.log("Отправлен метод пут с контентом")
    console.log(action.payload)
    console.log("Ответ")
    console.log(status)


    if (status === 200) {
        console.log("Вызван внутренний метод по изменению заметки")
        yield put(editNote(action.payload))
    }
}
