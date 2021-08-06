import { getSinglePostThunk } from './questionPageReducer'
import { SERVER } from '../config'

const UPDATE_POSTS = 'UPDATE-POSTS'
const CLEAR_MAIN_PAGE_POSTS = 'CLEAR-MAIN-PAGE-POSTS'
const LOADING_ERROR = 'LOADING-ERROR'

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

const questionOnTheMainReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_POSTS:
      return {
        ...state,
        posts: action.data,
      }
    case CLEAR_MAIN_PAGE_POSTS:
      return {
        ...state,
        posts: [],
      }
    default:
      return state
    /**/
  }
}
export default questionOnTheMainReducer

export const updatePostsMainPage = (data) => ({
  type: UPDATE_POSTS,
  data: data,
})

export const getPostThunk = () => {
  return (dispatch, getState) => {
    let state = getState()
    dispatch(clearMainPagePosts)
    dispatch(loadingInProgress(false))
    if (state.authorization.isAuth) {
      fetch(`http://${SERVER}/api/questionswithauth/all/1`, {
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
      fetch(`http://${SERVER}/api/questions/all/1`)
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

export const putLikeQuestionOnMainThunk = (id, stateLike) => {
  return (dispatch, getState) => {
    let state = getState()

    if (!state.authorization.isAuth) {
      alert('Прежде чем поставить лайк, вам необходимо пройти авторизацию')
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
            dispatch(getPostThunk())
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
            dispatch(getPostThunk())
          },
          (error) => {
            console.warn(error)
          }
        )
    }
  }
}
