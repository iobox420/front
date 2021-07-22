const UPDATE_POSTS = 'UPDATE-POSTS'

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

const mainPageReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_POSTS:
      return {
        ...state,
        posts: action.data,
      }
    default:
      return state
    /*debugger*/
  }
}
export default mainPageReducer

export const updatePostsMainPage = (data) => ({
  type: UPDATE_POSTS,
  data: data,
})

export const getPostThunk = () => {
  return (dispatch) => {
    debugger
    fetch('http://localhost:4000/api/questions/all/1')
        .then((res) => res.json())
        .then(
            (result) => {
              dispatch(updatePostsMainPage(result))
            },
            (error) => {
              console.log('fetch error = ', error)
            }
        )
  }
}
