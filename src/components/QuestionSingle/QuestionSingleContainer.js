import { connect } from 'react-redux'
import QuestionSingleApiComponent from './QuestionSingleApiComponent'
import {
  addCommentButtonSingleQuestionReducerAC,
  countReducerAC,
  getSinglePostThunk,
  onChangeAddCommentTextFieldAC,
  putLikeCommentThunk,
  putLikeThunk,
  selectQuestionAC,
  sendCommentThunk,
  SingleQuestionAddCommentOnReplyTextFieldAC,
} from '../../redux/questionPageReducer'
import { commentReducerAC } from '../../redux/commentReducer'

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
    isLikeQ: state.questionSinglePage.post,
    isLikeR: state.questionSinglePage.reply,
    count: state.count,
    SingleQuestionAddCommentOnReplyTextField:
      state.SingleQuestionAddCommentOnReplyTextField,
    commentTextField: state.comment,
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    updateSinglePostsThunk: () => {
      dispatch(getSinglePostThunk())
    },
    showTextField: (bool) => {
      dispatch(addCommentButtonSingleQuestionReducerAC(bool))
    },
    onChangeAddCommentTextFieldFunc: (text, id) => {
      dispatch(onChangeAddCommentTextFieldAC(text, id))
    },
    sendCommentThunk: (text, id, type, i) => {
      dispatch(sendCommentThunk(text, id, type, i))
    },
    selectQuestion: (selectedQuestion) => {
      dispatch(selectQuestionAC(selectedQuestion))
    },
    putLike: (id, type, index) => {
      dispatch(putLikeThunk(id, type, index))
    },
    countReducerAC: () => {
      dispatch(countReducerAC())
    },
    storeTextFieldAdd: (text, id) => {
      dispatch(commentReducerAC(text, id))
    },
    putLikeComment: (id, stateLike, iReply, iComment) => {
      dispatch(putLikeCommentThunk(id, stateLike, iReply, iComment))
    },
  }
}

const QuestionSingleContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(QuestionSingleApiComponent)

export default QuestionSingleContainer
