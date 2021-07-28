import { connect } from 'react-redux'
import QuestionSingleApiComponent from './QuestionSingleApiComponent'
import {
  addCommentButtonSingleQuestionReducerAC,
  getSinglePostThunk,
  onChangeAddCommentTextFieldAC,
  putLikeThunk,
  selectQuestionAC,
  sendCommentThunk,
} from '../../redux/questionPageReducer'

let mapStateToProps = (state) => {
  return {
    post: state.questionSinglePage.post,
    replys: state.questionSinglePage.reply,
    isLoadingSingleQuestion: state.loadingSingleQuestionInProgress,
    error: state.loadingSingleQuestionError,
    state: state,
    selectedQuestion: state.selectedQuestion,
    showTextFieldState: state.addCommentButtonSingleQuestion,
    onChangeAddCommentTextField: state.onChangeAddCommentTextField,
    token: state.authorization.token,
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    updateSinglePostsThunk: (uri) => {
      dispatch(getSinglePostThunk(uri))
    },
    showTextField: (bool) => {
      dispatch(addCommentButtonSingleQuestionReducerAC(bool))
    },
    onChangeAddCommentTextFieldFunc: (text) => {
      dispatch(onChangeAddCommentTextFieldAC(text))
    },
    sendCommentThunk: (textcom, selectedQ, token) => {
      dispatch(sendCommentThunk(textcom, selectedQ, token))
    },
    selectQuestion: (selectedQuestion) => {
      dispatch(selectQuestionAC(selectedQuestion))
    },
    putLike: (id, type) => {
      dispatch(putLikeThunk(id, type))
    },
  }
}

const QuestionSingleContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(QuestionSingleApiComponent)

export default QuestionSingleContainer
