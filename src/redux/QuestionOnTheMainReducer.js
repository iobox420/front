import {
  getSinglePostThunk,
  updateQuestionComponentDisLike,
  updateReplyLike,
} from './questionPageReducer'
import { SERVER } from '../config'
const server = process.env.REACT_APP_API_SERVER

const UPDATE_POSTS = 'UPDATE-POSTS'
const CLEAR_MAIN_PAGE_POSTS = 'CLEAR-MAIN-PAGE-POSTS'
const LOADING_ERROR = 'LOADING-ERROR'

const CURRENT_URL = 'CURRENT-URL'

const UPDATE_LIKE_COMPONENT_STATE_AFTER_LIKE = `UPDATE-LIKE-COMPONENT-STATE-AFTER-LIKE`
const UPDATE_LIKE_COMPONENT_STATE_AFTER_DISLIKE = `UPDATE-LIKE-COMPONENT-STATE-AFTER-DISLIKE`

let initialState = {
  posts: [
    {
      heading: 'reducer store',
      questions_text:
        'gElNAEzLcfJMKKVXqlET2Z1McgkoHSe71J2tfk1jEBFbEMoA1iYcHxKKi8VuEyTIp8Q9zKBZEy3b8nE0qP89TCqwWqVu7lohhR9v',
      date_create: '2020-04-28T21:00:00.000Z',
      id: 134,
      user_name: 'gpiacXEC',
      name: '9sfjjhXz',
      second_name: 'CcTxw7Wp',
      avatar_url:
        'https://gravatar.com/avatar/eed3bf7d5f820db6dee44dfdf7e27bd7?s=400&d=robohash&r=x',
      question_post_likes_count: 41,
      rows_count: 4000,
      reply_text:
        'KYPFlcPsIxVjnbijdjdW71bG1w53Shn74oC3Z2Mbqis0eoUYPOa4B3G26TC1QJhsc0DI6TwEKWZfnSvy9WE7ahPioYsTt5ZfOglr',
      reply_date_create: '2020-04-23T21:00:00.000Z',
      reply_user_name: 'gpiacXEC',
      reply_name: '9sfjjhXz',
      reply_second_name: 'CcTxw7Wp',
      reply_avatar_url:
        'https://gravatar.com/avatar/eed3bf7d5f820db6dee44dfdf7e27bd7?s=400&d=robohash&r=x',
      reply_likes_count: 9,
    },
  ],
}

const questionOnTheMainReducer = (state = initialState, a) => {
  switch (a.type) {
    case UPDATE_POSTS:
      return {
        ...state,
        posts: a.data,
      }
    case CLEAR_MAIN_PAGE_POSTS:
      return {
        ...state,
        posts: [],
      }
    case UPDATE_LIKE_COMPONENT_STATE_AFTER_LIKE:
      /* a.dateLike a.indexQuestion */
      let newLikesCount =
        state.posts[a.indexQuestion].question_post_likes_count + 1

      return {
        ...state,
        posts: state.posts.slice(0, a.indexQuestion).concat(
          {
            ...state.posts[a.indexQuestion],
            isLike: a.dateLike,
            question_post_likes_count: newLikesCount,
          },
          state.posts.slice(a.indexQuestion + 1)
        ),
      }
    case UPDATE_LIKE_COMPONENT_STATE_AFTER_DISLIKE:
      /* a.dateLike a.indexQuestion */

      let newLikesCount2 =
        state.posts[a.indexQuestion].question_post_likes_count - 1

      return {
        ...state,
        posts: state.posts.slice(0, a.indexQuestion).concat(
          {
            ...state.posts[a.indexQuestion],
            isLike: a.dateLike,
            question_post_likes_count: newLikesCount2,
          },
          state.posts.slice(a.indexQuestion + 1)
        ),
      }
    default:
      return state
    /**/
  }
}
export default questionOnTheMainReducer

const updateLikeComponentStateAfterLike = (dateLike, indexQuestion) => ({
  type: UPDATE_LIKE_COMPONENT_STATE_AFTER_LIKE,
  dateLike: dateLike,
  indexQuestion: indexQuestion,
})
const updateLikeComponentStateAfterDisLike = (dateLike, indexQuestion) => ({
  type: UPDATE_LIKE_COMPONENT_STATE_AFTER_DISLIKE,
  dateLike: dateLike,
  indexQuestion: indexQuestion,
})

export const updatePostsMainPage = (data) => ({
  type: UPDATE_POSTS,
  data: data,
})

export const getPostThunk = (url) => {
  return (dispatch, getState) => {
    let state = getState()
    dispatch(clearMainPagePosts)
    dispatch(loadingInProgress(false))

    if (state.authorization.isAuth) {
      fetch(`http://${SERVER}/api/questionswithauth${url}/1`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: state.authorization.token,
        },
      })
        .then((res) => res.json())
        .then(
          (result) => {
            dispatch(loadingInProgress(true))
            dispatch(updatePostsMainPage(result))
          },
          (error) => {
            dispatch(loadingErrorAC(true))
          }
        )
    } else {
      fetch(`http://${SERVER}/api/questions${url}/1`)
        .then((res) => res.json())
        .then(
          (result) => {
            dispatch(loadingInProgress(true))
            dispatch(updatePostsMainPage(result))
          },
          (error) => {
            dispatch(loadingErrorAC(true))
          }
        )
    }
  }
}

export const clearMainPagePosts = () => ({
  type: 'CLEAR-MAIN-PAGE-POSTS',
})

export const loadingInProgress = (bool) => ({
  type: 'LOADING_IN_PROGRESS',
  isLoading: bool,
})

export const loadingQuestionOnTheMainReducer = (state = false, action) => {
  switch (action.type) {
    case 'LOADING_IN_PROGRESS':
      return action.isLoading
    default:
      return state
  }
}

export const loadingErrorAC = (bool) => ({
  type: 'LOADING-ERROR',
  hasErrored: bool,
})

export const loadingErrorReducer = (state = false, action) => {
  switch (action.type) {
    case 'LOADING_ERROR':
      return action.hasErrored
    default:
      return state
  }
}

export const loadingSuccess = (repos) => ({
  type: 'LOADING-SUCCESS',
  repos,
})

export const putLikeQuestionOnMainThunk = (id, stateLike, index) => {
  return (dispatch, getState) => {
    let state = getState()

    if (!state.authorization.isAuth) {
      alert('???????????? ?????? ?????????????????? ????????, ?????? ???????????????????? ???????????? ??????????????????????')
    } else if (stateLike == null) {
      let uri = `http://${SERVER}/api/questions/questions_posts/like/question/${id}`

      fetch(uri, {
        method: 'POST',
        headers: {
          Authorization: state.authorization.token,
        },
      })
        .then((res) => res.json())
        .then(
          (result) => {
            if (result.message == 'like has been completed') {
              dispatch(
                updateLikeComponentStateAfterLike(result.dateLike, index)
              )
            }
          },
          (error) => {
            console.warn(error)
          }
        )
    }
    if (stateLike !== null) {
      let uri = `http://${SERVER}/api/questions/questions_posts/removelike/question/${id}`

      fetch(uri, {
        method: 'POST',
        headers: {
          Authorization: state.authorization.token,
        },
      })
        .then((res) => res.json())
        .then(
          (result) => {
            if (result.message == 'like has been removed') {
              dispatch(updateLikeComponentStateAfterDisLike(null, index))
            }
          },
          (error) => {
            console.warn(error)
          }
        )
    }
  }
}

export const signUp = (dataUsers) => {
  return (dispatch, getState) => {
    fetch(`${server}/api/signup`, {
      method: 'POST',
      body: JSON.stringify({
        dataUsers,
      }),
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + localStorage.getItem('token'),
      },
    })
      .then((r) => {
        return r.json()
      })
      .then((res) => {
        console.log(res)
        if (res.message === '?????????????????????? ?????????????? ??????????????????') {
          alert(res.message)
        }
        if (res.state === 'bad') {
          alert(res.message)
        }
      })
  }
}

export const currrentUrlReducer = (state = '', action) => {
  switch (action.type) {
    case CURRENT_URL:
      return action.url
    default:
      return state
  }
}

export const currentUrlAC = (url) => ({
  type: CURRENT_URL,
  url: url,
})

export const showTextBoxQuestionOnMainPageAC = () => ({
  type: 'UPDATE_TEXT_BOX_SHOW_STATE',
})

export const showTextBoxQuestionOnMainPageReducer = (state = false, action) => {
  switch (action.type) {
    case 'UPDATE_TEXT_BOX_SHOW_STATE':
      return state ? false : true
    default:
      return state
  }
}

export const sendNewQuestionThunk = (header, text) => {
  return (dispatch, getState) => {}
}
