import { connect } from 'react-redux'
import {
  currentUrlAC,
  sendNewQuestionThunk,
  showTextBoxQuestionOnMainPageAC,
  signUp,
  updatePostsMainPage,
} from '../redux/QuestionOnTheMainReducer'
import MainPage from './MainPage'
import { clearTokenAC, /*clearTokenAC,*/ tokenAC } from '../redux/tokenReducer'

let mapStateToProps = (state) => {
  return {
    state: state,
    token: state.authorization.token,
    showTextBoxQuestionOnMainPage: state.showTextBoxQuestionOnMainPage,
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
    signUp: (dataUsers) => {
      dispatch(signUp(dataUsers))
    },
    currentUrl: (url) => {
      dispatch(currentUrlAC(url))
    },
    setShowTextBoxQuestionOnMainPage: () => {
      dispatch(showTextBoxQuestionOnMainPageAC())
    },
  }
}

const MainPageContainer = connect(mapStateToProps, mapDispatchToProps)(MainPage)

export default MainPageContainer
