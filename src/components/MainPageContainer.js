import { connect } from 'react-redux'
import { updatePostsMainPage } from '../redux/QuestionOnTheMainReducer'
import MainPage from './MainPage'
import { clearTokenAC, /*clearTokenAC,*/ tokenAC } from '../redux/tokenReducer'

let mapStateToProps = (state) => {
  return {
    state: state,
    token: state.authorization.token,
  }
}
let mapDispatchToProps = (dispatch) => {
  return {
    updatePosts: (data) => {
      dispatch(updatePostsMainPage(data))
    },
    tokenAC: (data) => {
      dispatch(tokenAC(data))
    },
    clearTokenAC: () => {
      dispatch(clearTokenAC())
    },
  }
}

const MainPageContainer = connect(mapStateToProps, mapDispatchToProps)(MainPage)

export default MainPageContainer
