import { takeLatest, call, put } from "redux-saga/effects";
import axios from "axios";

// watcher saga: watches for actions dispatched to the store, starts worker saga
export function* watcherSaga() {
  yield takeLatest("ANSWER_API_REQUEST", workerSaga);
}

// function that makes the api request and returns a Promise for response
function fetchAnswer() {
  return axios({
    method: "get",
    url: "http://localhost:5000/get_all_answer",
    headers: {
          'Content-Type': 'application/json',
          'x-auth':"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1Y2E2NDhmNjE0YjJiYjcwNjAxMzE1Y2IiLCJhY2Nlc3MiOiJhdXRoIiwiaWF0IjoxNTU0NDAxNTI2fQ.lzDnYxxNfOA97DkmJsYi5wyPPpB-PRXBFrsoT5wB8R0eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1Y2E2NDhmNjE0YjJiYjcwNjAxMzE1Y2IiLCJhY2Nlc3MiOiJhdXRoIiwiaWF0IjoxNTU0NDAxNTI2fQ.lzDnYxxNfOA97DkmJsYi5wyPPpB-PRXBFrsoT5wB8R0"
        }
  });
}

// worker saga: makes the api call when watcher saga sees the action
function* workerSaga() {
  try {
    const response = yield call(fetchAnswer);
    const answer = response.data;
    console.log(answer);

    // dispatch a success action to the store with the new answer
    yield put({ type: "ANSWER_API_SUCCESS", answer });

  } catch (error) {
    // dispatch a failure action to the store with the error
    yield put({ type: "ANSWER_API_FAILURE", error });
  }
}
