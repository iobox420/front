import axios from 'axios'

const UPDATE_CURRENT_POST = 'UPDATE-CURRENT-POST'
const LOADING_SINGLE_QUESTION_IN_PROGRESS =
  'LOADING-SINGLE-QUESTION-IN-PROGRESS'
const CLEAR_SINGLE_QUESTION = 'CLEAR-SINGLE-QUESTION'
const LOADING_IN_PROGRESS = 'LOADING-IN-PROGRESS'
const LOADING_ERROR = 'LOADING-ERROR'
const SHOW_COMMENT_TEXT_FIELD_SINGLE_QUESTION =
  'SHOW-COMMENT-TEXT-FIELD-SINGLE-QUESTION'
const ON_CHANGE_TEXT_BOX_FIELD = 'ON-CHANGE-TEXT-BOX-FIELD'
const SEND_COMMENT = 'SEND_COMMENT'

const SELECT_QUESTION = 'SELECT-QUESTION'

const QUESTION = 'QUESTION'
const REPLY = 'REPLY'

let initialState = {
  post: [],
  reply: [],
}

const SingleQuestionPageReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_CURRENT_POST:
      debugger
      return {
        ...state,
        post: action.data.post,
        reply: action.data.reply,
      }
    case CLEAR_SINGLE_QUESTION:
      return {
        ...state,
        post: [],
        reply: [],
      }
    default:
      return state
    /**/
  }
}

export const updateQuestionPage = (data) => ({
  type: UPDATE_CURRENT_POST,
  data: data,
})

export const getSinglePostThunk = (uri) => {
  return (dispatch) => {
    /*dispatch(clearSingleQuestionPosts)*/
    let argument = String(uri).split('/')
    dispatch(selectQuestionAC(argument[4]))
    dispatch(loadingSingleQuestion(false))
    fetch('http://localhost:4000/api/questions/questions_posts/' + argument[4])
      .then((res) => res.json())
      .then(
        (result) => {
          dispatch(loadingSingleQuestion(true))
          dispatch(updateQuestionPage(result))
        },
        (error) => {
          dispatch(loadingSingleQuestionErrorAC(true))
        }
      )
  }
}

export const clearSingleQuestion = () => ({
  type: CLEAR_SINGLE_QUESTION,
})

export const loadingSingleQuestion = (bool) => ({
  type: LOADING_IN_PROGRESS,
  isLoading: bool,
})

export const loadingSingleQuestionReducer = (state = false, action) => {
  switch (action.type) {
    case LOADING_IN_PROGRESS:
      return action.isLoading
    default:
      return state
  }
}

export const loadingSingleQuestionErrorAC = (bool) => ({
  type: LOADING_ERROR,
  hasErrored: bool,
})

export const loadingSingleQuestionErrorReducer = (state = false, action) => {
  switch (action.type) {
    case LOADING_ERROR:
      return action.hasErrored
    default:
      return state
  }
}

export const addCommentButtonSingleQuestionReducerAC = (bool) => ({
  type: SHOW_COMMENT_TEXT_FIELD_SINGLE_QUESTION,
  showTextField: bool,
})

export const addCommentButtonSingleQuestionReducer = (
  state = false,
  action
) => {
  switch (action.type) {
    case SHOW_COMMENT_TEXT_FIELD_SINGLE_QUESTION:
      return action.showTextField
    default:
      return state
  }
}

export const onChangeAddCommentTextFieldAC = (text) => ({
  type: ON_CHANGE_TEXT_BOX_FIELD,
  text: text,
})

export const onChangeAddCommentTextFieldReducer = (state = '', action) => {
  switch (action.type) {
    case ON_CHANGE_TEXT_BOX_FIELD:
      return action.text
    default:
      return state
  }
}

export const sendCommentThunkAC = (textcom, selectedQ) => ({
  type: SEND_COMMENT,
  text: textcom,
  selectedQuestion: selectedQ,
})

export const sendCommentThunkReducer = (state = '', action) => {
  switch (action.type) {
    case SEND_COMMENT:
      return action.text
    default:
      return state
  }
}

export const selectQuestionAC = (selectedQuestion) => ({
  type: SELECT_QUESTION,
  data: selectedQuestion,
})

export const selectQuestionReducer = (state = null, action) => {
  switch (action.type) {
    case SELECT_QUESTION:
      return action.data
    default:
      return state
  }
}

export const sendCommentThunk = (textcom, selectedQ, token) => {
  debugger
  return (dispatch, getState) => {
    let state = getState()
    let itgo = null

    fetch(
      `http://localhost:4000/api/questions/questions_posts/add/${selectedQ}/${textcom}`,
      {
        method: 'POST',
        headers: {
          Authorization: token,
        },
      }
    )
      .then((res) => res.json())
      .then(
        (result) => {
          let kostyl = `////${selectedQ}`
          dispatch(getSinglePostThunk(kostyl))
        },
        (error) => {
          alert(error)
        }
      )
  }
}

export const putLikeThunk = (id, type) => {
  return (dispatch, getState) => {
    let state = getState()
    let uri = null
    debugger

    if (type == QUESTION) {
      uri = `http://localhost:4000/api/questions/questions_posts/like/question/${id}`
    }
    if (type == REPLY) {
      uri = `http://localhost:4000/api/questions/questions_posts/like/reply/${id}`
    }

    debugger
    fetch(uri, {
      method: 'POST',
      headers: {
        Authorization: state.authorization.token,
      },
    })
      .then((res) => res.json())
      .then(
        (result) => {
          debugger
          let kostyl = `////${state.selectedQuestion}`
          console.warn(kostyl)
          dispatch(getSinglePostThunk(kostyl))
        },
        (error) => {
          debugger
          console.warn(error)
        }
      )
  }
}

export default SingleQuestionPageReducer
