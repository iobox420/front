// import mainPageReducer from './mainPageReducer'
// import questionPageReducer from './questionPageReducer'
// import tokenReducer from './tokenReducer'
// import addCommentTextBoxShowReducer from './addCommentTextBoxShowReducer'
// import { combineReducers, createStore } from 'redux'
//
// let reducers = combineReducers({
//   mainPage: mainPageReducer,
//   questionPage: questionPageReducer,
//   token: tokenReducer,
//   questionPage_addCommentTextBoxShow: addCommentTextBoxShowReducer,
// })
//
// let store = createStore(reducers)
//
// export default store
import questionPageReducer from './questionPageReducer'
import tokenReducer from './tokenReducer'
import addCommentTextBoxShowReducer from './addCommentTextBoxShowReducer'
import { applyMiddleware, combineReducers, createStore } from 'redux'
/*import textFieldCommentSingleQuestionReducer from './textFieldCommentSingleQuestionReducer'*/
import thunk from 'redux-thunk'
import mainPageReducer from './mainPageReducer'

let reducers = combineReducers({
  mainPage: mainPageReducer,
  questionPage: questionPageReducer,
  /*textFieldCommentSingleQuestion: textFieldCommentSingleQuestionReducer,*/
  token: tokenReducer,
  questionPage_addCommentTextBoxShow: addCommentTextBoxShowReducer,
})

let store = createStore(reducers, applyMiddleware(thunk))

export default store
