// action types
const GET_QUESTION_REQUEST = "GET_QUESTION_REQUEST";
const GET_QUESTION_SUCCESS = "GET_QUESTION_SUCCESS";
const GET_QUESTION_FAILURE = "GET_QUESTION_FAILURE";

// reducer with initial state
const initialState = {
  fetching: false,
  question: [],
  error: null
};

export default function getallquestion(state = initialState, action) {
  console.log();
  switch (action.type) {
    case GET_QUESTION_REQUEST:
      return { ...state, fetching: true, error: null };
    case GET_QUESTION_SUCCESS:
      return { ...state, fetching: false, question: action.question };
    case GET_QUESTION_FAILURE:
      return { ...state, fetching: false, question: null, error: action.error };
    default:
      return state;
  }
}
