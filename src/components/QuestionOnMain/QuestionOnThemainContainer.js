import { connect } from 'react-redux'
import QuestionOnTheMainApiComponent from './QuestionOnTheMainApiComponent'
import {
  getPostThunk,
  loadingInProgress,
  putLikeQuestionOnMainThunk,
} from '../../redux/QuestionOnTheMainReducer'
import { selectQuestionAC } from '../../redux/questionPageReducer'

let mapStateToProps = (state) => {
  return {
    posts: state.mainPage.posts,
    isLoading: state.loadingQuestionOnTheMain,
    loadingError: state.loadingError,
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    updatePostsThunk: () => {
      dispatch(getPostThunk())
    },
    isLoadingCHE: (bool) => {
      dispatch(loadingInProgress(bool))
    },
    selectQuestion: (selectedQuestion) => {
      dispatch(selectQuestionAC(selectedQuestion))
    },
    putLikeQuestionOnMain: (id, stateLike) => {
      dispatch(putLikeQuestionOnMainThunk(id, stateLike))
    },
  }
}

const QuestionOnTheMainContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(QuestionOnTheMainApiComponent)

export default QuestionOnTheMainContainer
