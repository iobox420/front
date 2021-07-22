import { connect } from 'react-redux'
import QuestionOnTheMainApiComponent from './QuestionOnTheMainApiComponent'
import { getPostThunk, updatePostsMainPage } from '../../redux/mainPageReducer'

let mapStateToProps = (state) => {
  return {
    state: state,
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
     updatePostsThunk: () => {
      dispatch(getPostThunk())
    },
    updateTestReducer: (data) => {
      dispatch(updatePostsMainPage(data))
    },
  }
}

const QuestionOnTheMainContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(QuestionOnTheMainApiComponent)

export default QuestionOnTheMainContainer
