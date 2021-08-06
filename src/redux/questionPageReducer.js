import axios from 'axios'
import { getPostThunk } from './QuestionOnTheMainReducer'
import { SERVER } from '../config'

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

const UPDATE_LIKE = 'UPDATE-LIKE'

const INKREMENT = 'INKREMENT'

const ON_CHANGE_TEXT_BOX_FIELD_COMMENT = 'ON-CHANGE-TEXT-BOX-FIELD-COMMENT'

let initialState = {
  post: [],
  reply: [],
}

let init = ''

export const countReducer = (state, action) => {
  switch (action.type) {
    case INKREMENT:
      let result = state + 1
      return {
        result,
      }
    default:
      return 0
  }
}

export const countReducerAC = () => ({
  type: INKREMENT,
})

const SingleQuestionPageReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_CURRENT_POST:
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

export const getSinglePostThunk = () => {
  return (dispatch, getState) => {
    let state = getState()
    let uri = document.location.href
    let argument = String(uri).split('/')
    if (state.authorization.isAuth) {
      /*dispatch(clearSingleQuestionPosts)*/
      dispatch(selectQuestionAC(argument[4]))
      dispatch(loadingSingleQuestion(false))

      fetch(
        `http://${SERVER}/api/questions/questions_posts_with_auth/` +
          argument[4],
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: state.authorization.token,
          },
        }
      )
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
    if (!state.authorization.isAuth) {
      /*dispatch(clearSingleQuestionPosts)*/
      dispatch(selectQuestionAC(argument[4]))
      dispatch(loadingSingleQuestion(false))
      fetch(`http://${SERVER}/api/questions/questions_posts/` + argument[4])
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
}

export const updateQuestionPageLike = (data) => ({
  type: UPDATE_LIKE,
  data: data,
})

export const getSinglePostThunkSimple = () => {
  return (dispatch) => {
    let uri = document.location.href
    let argument = String(uri).split('/')
    dispatch(selectQuestionAC(argument[4]))
    /*dispatch(loadingSingleQuestion(false))*/
    fetch('http://${SERVER}/api/questions/questions_posts/' + argument[4])
      .then((res) => res.json())
      .then(
        (result) => {
          /*dispatch(loadingSingleQuestion(true))*/
          dispatch(updateQuestionPage(result))
        },
        (error) => {
          /*dispatch(loadingSingleQuestionErrorAC(true))*/
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

export const onChangeAddCommentTextFieldAC = (text, id) => ({
  type: ON_CHANGE_TEXT_BOX_FIELD,
  text: text,
  id: id,
})

export const onChangeAddCommentTextFieldReducer = (state = '', action) => {
  switch (action.type) {
    case ON_CHANGE_TEXT_BOX_FIELD:
      let rt = {
        ...state,
        id: action.id,
        text: action.text,
      }
      return rt
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

export const sendCommentThunk = (text, id, type) => {
  return (dispatch, getState) => {
    let state = getState()

    if (state.authorization.isAuth === false) {
      alert('Только авторизованные пользователя могут оставлять комментарии')
    } else {
      if (type === 'COMMENT-ON-REPLY') {
        fetch(
          `http://${SERVER}/api/questions/questions_posts/add_comment_on_reply/${id}/${text}`,
          {
            method: 'POST',
            headers: {
              Authorization: state.authorization.token,
            },
          }
        )
          .then((res) => res.json())
          .then(
            (result) => {
              dispatch(getSinglePostThunk())
            },
            (error) => {
              alert(error)
            }
          )
      }
      if (type === 'REPLY-ON-QUESTION') {
        fetch(
          `http://${SERVER}/api/questions/questions_posts/add/${id}/${text}`,
          {
            method: 'POST',
            headers: {
              Authorization: state.authorization.token,
            },
          }
        )
          .then((res) => res.json())
          .then(
            (result) => {
              dispatch(getSinglePostThunk())
            },
            (error) => {
              alert(error)
            }
          )
      }
    }
  }
}

export const putLikeThunk = (id, type) => {
  return (dispatch, getState) => {
    let state = getState()
    let uri = 'null'

    if (state.authorization.isAuth) {
      let arr = state.questionSinglePage.reply
      let res = null
      let index = null
      res = arr.find((el, i, arr) => {
        if (el._id_reply === id) {
          index = i
          return true
        }
      })
      console.log(res, index)

      if (
        type == QUESTION &&
        state.questionSinglePage.post[0].isLike === null
      ) {
        uri = `http://${SERVER}/api/questions/questions_posts/like/question/${id}`
        fetch(uri, {
          method: 'POST',
          headers: {
            Authorization: state.authorization.token,
          },
        })
          .then((res) => res.json())
          .then(
            (result) => {
              dispatch(getSinglePostThunk())
            },
            (error) => {
              console.warn(error)
            }
          )
      }

      if (
        type == REPLY &&
        state.questionSinglePage.reply[index].isLike === null
      ) {
        uri = `http://${SERVER}/api/questions/questions_posts/like/reply/${id}`
        fetch(uri, {
          method: 'POST',
          headers: {
            Authorization: state.authorization.token,
          },
        })
          .then((res) => res.json())
          .then(
            (result) => {
              dispatch(getSinglePostThunk())
            },
            (error) => {
              console.warn(error)
            }
          )
      }
      if (
        type == REPLY &&
        state.questionSinglePage.reply[index].isLike != null
      ) {
        fetch(
          `http://${SERVER}/api/questions/questions_posts/removelike/reply/${id}`,
          {
            method: 'POST',
            headers: {
              Authorization: state.authorization.token,
            },
          }
        )
          .then((res) => res.json())
          .then(
            (result) => {
              dispatch(getSinglePostThunk())
            },
            (error) => {
              console.warn(error)
            }
          )
      }
      if (type == QUESTION && state.questionSinglePage.post[0].isLike != null) {
        fetch(
          `http://${SERVER}/api/questions/questions_posts/removelike/question/${id}`,
          {
            method: 'POST',
            headers: {
              Authorization: state.authorization.token,
            },
          }
        )
          .then((res) => res.json())
          .then(
            (result) => {
              dispatch(getSinglePostThunk())
            },
            (error) => {
              console.warn(error)
            }
          )
      }
    } else {
      alert('Прежде чем поставить лайк, вам необходимо пройти авторизацию')
    }
  }
}
export const putLikeCommentThunk = (id, stateLike) => {
  return (dispatch, getState) => {
    let state = getState()

    if (!state.authorization.isAuth) {
      alert('Прежде чем поставить лайк, вам необходимо пройти авторизацию')
    } else if (stateLike == null) {
      let uri = `http://${SERVER}/api/questions/questions_posts/like/comment/${id}`
      fetch(uri, {
        method: 'POST',
        headers: {
          Authorization: state.authorization.token,
        },
      })
        .then((res) => res.json())
        .then(
          (result) => {
            dispatch(getSinglePostThunk())
          },
          (error) => {
            console.warn(error)
          }
        )
    }
    if (stateLike !== null) {
      let uri = `http://${SERVER}/api/questions/questions_posts/removelike/comment/${id}`
      fetch(uri, {
        method: 'POST',
        headers: {
          Authorization: state.authorization.token,
        },
      })
        .then((res) => res.json())
        .then(
          (result) => {
            dispatch(getSinglePostThunk())
          },
          (error) => {
            console.warn(error)
          }
        )
    }
  }
}

export default SingleQuestionPageReducer
