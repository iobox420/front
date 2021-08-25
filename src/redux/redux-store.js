import {
  loadingSingleQuestionReducer,
  loadingSingleQuestionErrorReducer,
  addCommentButtonSingleQuestionReducer,
  onChangeAddCommentTextFieldReducer,
  sendCommentThunkReducer,
  selectQuestionReducer,
  countReducer,
  SingleQuestionAddCommentOnReplyTextFieldReducer,
} from './questionPageReducer'
import tokenReducer from './tokenReducer'
import addCommentTextBoxShowReducer from './addCommentTextBoxShowReducer'
import { applyMiddleware, combineReducers, compose, createStore } from 'redux'

import thunk from 'redux-thunk'
import questionOnTheMainReducer, {
  currrentUrlReducer,
  loadingErrorReducer,
  loadingQuestionOnTheMainReducer,
} from './QuestionOnTheMainReducer'
import SingleQuestionPageReducer from './questionPageReducer'
import commentReducer from './commentReducer'

let reducers = combineReducers({
  authorization: tokenReducer,

  mainPage: questionOnTheMainReducer,
  loadingQuestionOnTheMain: loadingQuestionOnTheMainReducer,
  loadingError: loadingErrorReducer,

  questionSinglePage: SingleQuestionPageReducer,
  loadingSingleQuestionInProgress: loadingSingleQuestionReducer,
  loadingSingleQuestionError: loadingSingleQuestionErrorReducer,
  selectedQuestion: selectQuestionReducer,

  SingleQuestion_addCommentTextBoxShow: addCommentTextBoxShowReducer,
  addCommentButtonSingleQuestion: addCommentButtonSingleQuestionReducer,
  onChangeAddCommentTextField: onChangeAddCommentTextFieldReducer,
  sendCommentThunk: sendCommentThunkReducer,

  currrentUrl: currrentUrlReducer,

  count: countReducer,

  comment: commentReducer,
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)))

/*let store = createStore(reducers, applyMiddleware(thunk))*/

export default store
