import {takeLatest, call, put} from 'redux-saga/effects'
import {postNote} from '../api/api'
import {CREATE_NOTE} from "../../constants/actions";
import {addNewNote} from "../actions/actions_reducers";

export function* createNoteWatcher() {
    yield takeLatest(CREATE_NOTE, createNoteFlow)
}

function* createNoteFlow(action) {
    const status = yield call(postNote, action.payload)
    console.log("Отправлен метод пост с контентом")
    console.log(action.payload)
    console.log("Ответ")
    console.log(status)

    if (status === 201) {
        console.log("Вызван внутренний метод по добавлению заметки")
        yield put(addNewNote(action.payload))
    }
}
