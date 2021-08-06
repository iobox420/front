import React from 'react'
import QuestionSingle from './QuestionSingle'
import { makeStyles } from '@material-ui/core/styles'
import Reply from './Reply'
import AddCommentTODOS from './AddTODOS'

const { useEffect } = require('react')

const useStyles = makeStyles({
  mainWrapper: {
    margin: '20px 0 0 0',
  },
  text: {},
})

export default function QuestionSingleApiComponent({
  updateSinglePostsThunk,
  post,
  replys,
  isLoadingSingleQuestion,
  state,
  isLoadingCHECK,
  error,
  showTextField,
  onChangeAddCommentTextField,
  onChangeAddCommentTextFieldFunc,
  sendCommentThunk,
  selectedQuestion,
  selectQuestion,
  token,
  putLike,
  count,
  countReducerAC,
  isLikeQ,
  isLikeR,
  SingleQuestionAddCommentOnReplyTextFieldAC,
  storeTextFieldAdd,
  commentTextField,
  putLikeComment,
}) {
  const c = useStyles()
  let n1 = 'exp1'
  let n2 = 'exp2'
  // Примечание: пустой массив зависимостей [] означает, что
  // этот useEffect будет запущен один раз
  // аналогично componentDidMount()

  useEffect(() => {
    updateSinglePostsThunk()
  }, [])

  if (error) {
    return <div>Ошибка:</div>
  } else if (!isLoadingSingleQuestion) {
    return <div>Загрузка...</div>
  } else {
    return (
      <div className={c.mainWrapper}>
        {post.map((currentPost, index, arr) => {
          return (
            <QuestionSingle
              storeTextFieldAdd={storeTextFieldAdd}
              putLike={putLike}
              key={index}
              props={currentPost}
              showTextField={showTextField}
              textFieldState={state.addCommentButtonSingleQuestion}
              onChangeAddCommentTextField={onChangeAddCommentTextField}
              onChangeAddCommentTextFieldFunc={onChangeAddCommentTextFieldFunc}
              sendCommentThunk={sendCommentThunk}
              selectedQuestion={selectedQuestion}
              isLikeQ={currentPost.isLike}
              token={token}
            />
          )
        })}
        {replys.map((currentPost, index, arr) => {
          return (
            <Reply
              putLikeComment={putLikeComment}
              sendCommentThunk={sendCommentThunk}
              commentTextField={commentTextField}
              storeTextFieldAdd={storeTextFieldAdd}
              SingleQuestionAddCommentOnReplyTextFieldAC={
                SingleQuestionAddCommentOnReplyTextFieldAC
              }
              i={index}
              key={index}
              props={currentPost}
              onChangeAddCommentTextFieldFunc={onChangeAddCommentTextFieldFunc}
              putLike={putLike}
              isLikeR={isLikeR[index].isLike}
              token={token}
            />
          )
        })}
      </div>
    )
  }
}
