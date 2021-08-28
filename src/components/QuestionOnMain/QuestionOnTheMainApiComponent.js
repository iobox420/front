import React from 'react'
import QuestionOnTheMain from './QuestionOnTheMain'
import { makeStyles } from '@material-ui/core/styles'
import date from 'date-and-time'
import AddCommentOnMain from '../addCommentOnMain/AddCommentOnMain'
import Test from './Test'
import QuestionHandle from '../ssubHeader'

const { useEffect } = require('react')

const useStyles = makeStyles({
  mainWrapper: {
    margin: '20px 0 0 0',
  },
})

function QuestionOnTheMainApiComponent({
  updatePostsThunk,
  posts,
  isLoading,
  loadingError,
  token,
  selectQuestion,
  putLikeQuestionOnMain,
  showTextBoxQuestionOnMainPage,
  sendNewQuestion,
}) {
  const c = useStyles()
  // Примечание: пустой массив зависимостей [] означает, что
  // этот useEffect будет запущен один раз
  // аналогично componentDidMount()

  useEffect(() => {
    updatePostsThunk(window.location.pathname)
  }, [])

  if (loadingError) {
    return <div>Ошибка: </div>
  } else if (!isLoading) {
    return <div>Загрузка... </div>
  } else {
    return (
      <div className={c.mainWrapper}>
        {showTextBoxQuestionOnMainPage ? (
          <AddCommentOnMain sendNewQuestion={sendNewQuestion} token={token} />
        ) : null}

        {posts.map((currentPost, index, arr) => {
          return (
            <QuestionOnTheMain
              index={index}
              putLikeQuestionOnMain={putLikeQuestionOnMain}
              key={index}
              props={currentPost}
              selectQuestion={selectQuestion}
            />
          )
        })}
      </div>
    )
  }
}

export default QuestionOnTheMainApiComponent
