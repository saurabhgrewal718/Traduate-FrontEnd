// action types
const ANSWER_API_REQUEST = "ANSWER_API_REQUEST";
const ANSWER_API_SUCCESS = "ANSWER_API_SUCCESS";
const ANSWER_API_FAILURE = "ANSWER_API_FAILURE";

// reducer with initial state
const initialState = {
  fetching: false,
  answer: [],
  error: null
};

export default function getallanswer(state = initialState, action) {
  switch (action.type) {
    case ANSWER_API_REQUEST:
      return { ...state, fetching: true, error: null };
    case ANSWER_API_SUCCESS:
      return { ...state, fetching: false, answer: action.answer };
    case ANSWER_API_FAILURE:
      return { ...state, fetching: false, answer: null, error: action.error };
    default:
      return state;
  }
}
