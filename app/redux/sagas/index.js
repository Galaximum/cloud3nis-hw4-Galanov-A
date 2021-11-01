import {fork} from 'redux-saga/effects'
import {loadNotesWatcher} from './loadNotesSaga'
import {createNoteWatcher} from "./createNoteSaga";
import {updateNoteWatcher} from "./updateNoteSaga";
import {deleteNoteWatcher} from "./deleteNoteSaga";

export default function* rootSaga() {
    yield fork(loadNotesWatcher)
    yield fork(createNoteWatcher)
    yield fork(updateNoteWatcher)
    yield fork(deleteNoteWatcher)
}

