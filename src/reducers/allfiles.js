import { combineReducers } from 'redux'
import getallanswer from './getallanswer'
import getallquestion from './getallquestion'

export default combineReducers({
  getallanswer,
  getallquestion
})
