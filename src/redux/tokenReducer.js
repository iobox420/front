const SET_TOKEN = 'SET-TOKEN'
const CLEAR_TOKEN = 'CLEAR-TOKEN'

let initialState = {
  token: null,
  user_id: null,
  user: null,
  avatarUrl: null,
  isAuth: false,
}

export const tokenAC = (data) => ({
  type: SET_TOKEN,
  data: data,
})
export const clearTokenAC = () => ({
  type: CLEAR_TOKEN,
})

const tokenReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TOKEN: {
      return {
        token: 'Bearer ' + action.data.token,
        user_id: action.data.userId,
        user: action.data.user,
        avatarUrl: action.data.avatarUrl,
        isAuth: true,
      }
    }
    case CLEAR_TOKEN: {
      return {
        token: null,
        user_id: null,
        user: null,
        avatarUrl: null,
        isAuth: false,
      }
    }
    default: {
      return state
    }
  }
}

export default tokenReducer
