import mainPageReducer from './mainPageReducer'
import tokenReducer from './tokenReducer'
import questionPageReducer from './questionPageReducer'

let store = {
  _state: {
    mainPage: {
      /*      posts: [
        {
          heading: 'store.js',
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
      ],*/
    },
    questionPage: {},
    token: {
      isAuth: null,
      user: null,
      avatarUrl: null,
      token: null,
    },
  },
  _callSubscriber() {
    console.log('state was changed')
  },
  getState() {
    return this._state
  },
  getPosts() {
    return this._state.mainPage.posts
  },
  getCurrentQuestion() {
    return this._state.questionPage
  },
  getToken() {
    return 'Bearer ' + this._state.token
  },
  getIsAuth() {
    return this._state.token.isAuth
  },
  getAvatarUrl() {
    return this._state.token.avatarUrl
  },
  subscribe(observer) {
    this._callSubscriber = observer
  },
  dispatch(action) {
    this._state.mainPage = mainPageReducer(this._state.mainPage, action)
    this._state.questionPage = questionPageReducer(
      this._state.questionPage,
      action
    )
    this._state.token = tokenReducer(this._state.token, action)
    this._callSubscriber(this._state)
  },
}

export default store
