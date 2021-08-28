import { connect } from 'react-redux'
import QuestionOnTheMainApiComponent from './QuestionOnTheMainApiComponent'
import {
  getPostThunk,
  loadingInProgress,
  putLikeQuestionOnMainThunk,
  sendNewQuestionThunk,
} from '../../redux/QuestionOnTheMainReducer'
import { selectQuestionAC } from '../../redux/questionPageReducer'

let mapStateToProps = (state) => {
  return {
    posts: state.mainPage.posts,
    isLoading: state.loadingQuestionOnTheMain,
    loadingError: state.loadingError,
    token: state.authorization.token,
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    updatePostsThunk: (url) => {
      dispatch(getPostThunk(url))
    },
    isLoadingCHE: (bool) => {
      dispatch(loadingInProgress(bool))
    },
    selectQuestion: (selectedQuestion) => {
      dispatch(selectQuestionAC(selectedQuestion))
    },
    putLikeQuestionOnMain: (id, stateLike, index) => {
      dispatch(putLikeQuestionOnMainThunk(id, stateLike, index))
    },
    sendNewQuestion: (header, text) => {
      dispatch(sendNewQuestionThunk(header, text))
    },
  }
}

const QuestionOnTheMainContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(QuestionOnTheMainApiComponent)

export default QuestionOnTheMainContainer
