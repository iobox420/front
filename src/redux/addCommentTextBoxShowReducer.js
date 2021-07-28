const SET_COMMENT_TEXT_BOX_STATE = 'SET-COMMENT-TEXT-BOX-STATE'

const addCommentTextBoxShowReducer = (state, action) => {
  let initialState = false
  switch (action.type) {
    case SET_COMMENT_TEXT_BOX_STATE: {
      if (state) {
        return false
      } else return true
    }
    default: {
      return initialState
    }
  }
}

export default addCommentTextBoxShowReducer
