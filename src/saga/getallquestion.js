import { takeLatest, call, put } from "redux-saga/effects";
import axios from "axios";

// watcher saga: watches for actions dispatched to the store, starts worker saga
export function* getquestions() {
  yield takeLatest("GET_QUESTION_REQUEST", workerSaga);
}

// function that makes the api request and returns a Promise for response
function fetchQuestions() {
  return axios({
    method: "get",
    url: "http://localhost:5000/get_all_question",
    headers: {
          'Content-Type': 'application/json',
          'x-auth':"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1Y2E2NDhmNjE0YjJiYjcwNjAxMzE1Y2IiLCJhY2Nlc3MiOiJhdXRoIiwiaWF0IjoxNTU0NDAxNTI2fQ.lzDnYxxNfOA97DkmJsYi5wyPPpB-PRXBFrsoT5wB8R0"
        }
  });
}

// worker saga: makes the api call when watcher saga sees the action
function* workerSaga() {
  try {
    const response = yield call(fetchQuestions);
    const question = response.data;
    console.log(question);

    // dispatch a success action to the store with the new question
    yield put({ type: "GET_QUESTION_SUCCESS", question });

  } catch (error) {
    // dispatch a failure action to the store with the error
    yield put({ type: "GET_QUESTION_FAILURE", error });
  }
}
