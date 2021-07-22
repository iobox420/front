import { connect } from 'react-redux'
import { updatePostsMainPage } from '../redux/mainPageReducer'
import MainPage from './MainPage'

let mapStateToProps = (state) => {
  return {
    state: state,
  }
}
let mapDispatchToProps = (dispatch) => {
  return {
    updatePosts: (data) => {
      dispatch(updatePostsMainPage(data))
    },
  }
}

const MainPageContainer = connect(mapStateToProps, mapDispatchToProps)(MainPage)

export default MainPageContainer
