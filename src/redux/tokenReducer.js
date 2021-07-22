const SET_TOKEN = 'SET-TOKEN'

let initialState = {
  token: null,
  isAuth: false,
}

const tokenReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TOKEN: {
      debugger
      return {
        token: action.data.token,
        user: action.data.user,
        avatarUrl: action.data.avatarUrl,
        isAuth: true,
      }
    }
    default: {
      return state
    }
  }
}

export default tokenReducer
