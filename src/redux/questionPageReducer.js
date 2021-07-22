const UPDATE_CURRENT_POST = 'UPDATE-CURRENT-POST'

let initialState = {
  post: [],
  reply: [],
}

const mainPageReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_CURRENT_POST:
      return {
        ...state,
        post: action.data.post,
        reply: action.data.reply,
      }
    default:
      return state
    /*debugger*/
  }
}

export const updateQuestionPage = (data) => ({
  type: UPDATE_CURRENT_POST,
  data: data,
})

export default mainPageReducer
