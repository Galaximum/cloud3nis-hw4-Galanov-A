import {takeLatest, call, put} from 'redux-saga/effects'
import {getNotes} from '../api/api'
import {LOAD_NOTES} from '../../constants/actions'
import {setNotes} from "../actions/actions_sagas";

export function* loadNotesWatcher() {
    yield takeLatest(LOAD_NOTES, loadNotesFlow)
}

function* loadNotesFlow() {
    const notes = yield call(getNotes)

    console.log("Отправлен метод гет с контентом")
    console.log("Ответ")
    console.log(notes)

    yield put(setNotes(notes))
}
