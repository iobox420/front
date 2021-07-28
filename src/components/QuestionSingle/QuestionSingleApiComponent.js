import React from 'react'
import QuestionSingle from './QuestionSingle'
import { makeStyles } from '@material-ui/core/styles'
import Reply from './Reply'

const { useEffect } = require('react')

const useStyles = makeStyles({
  mainWrapper: {
    margin: '20px 0 0 0',
  },
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
}) {
  const c = useStyles()

  // Примечание: пустой массив зависимостей [] означает, что
  // этот useEffect будет запущен один раз
  // аналогично componentDidMount()

  useEffect(() => {
    updateSinglePostsThunk(document.location.href)
  }, [])

  if (error) {
    return <div>Ошибка:</div>
  } else if (!isLoadingSingleQuestion) {
    return <div>Загрузка...</div>
  } else {
    return (
      <div className={c.mainWrapper}>
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => console.log(state)}
        >
          state
        </button>
        {post.map((currentPost, index, arr) => {
          return (
            <QuestionSingle
              putLike={putLike}
              key={index}
              props={currentPost}
              showTextField={showTextField}
              textFieldState={state.addCommentButtonSingleQuestion}
              onChangeAddCommentTextField={onChangeAddCommentTextField}
              onChangeAddCommentTextFieldFunc={onChangeAddCommentTextFieldFunc}
              sendCommentThunk={sendCommentThunk}
              selectedQuestion={selectedQuestion}
              token={token}
            />
          )
        })}
        {replys.map((currentPost, index, arr) => {
          return <Reply key={index} props={currentPost} putLike={putLike} />
        })}
      </div>
    )
  }
}
