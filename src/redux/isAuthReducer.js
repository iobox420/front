const SET_IS_AUTH = 'SET-IS-AUTH'

let initialState = {
  isAuthorized: false,
}

const tokenReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_IS_AUTH: {
      /*            let token = {
                token: action.token
            }
            return {
                ...state,
                token: token
            }*/
      return action.token
    }
    default: {
      return state
    }
  }
}

export default tokenReducer
