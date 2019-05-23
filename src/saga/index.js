import {all,fork} from "redux-saga/effects";
import {watcherSaga} from './sagas';
import {getquestions} from './getallquestion'

export default function* root(){
  yield all([
    fork(watcherSaga),
    fork(getquestions)
  ]);
}
