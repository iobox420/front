import React from 'react'
import QuestionOnTheMain from './QuestionOnTheMain'
import { makeStyles } from '@material-ui/core/styles'
import date from 'date-and-time'

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

  selectQuestion,
  putLikeQuestionOnMain,
}) {
  const c = useStyles()
  // Примечание: пустой массив зависимостей [] означает, что
  // этот useEffect будет запущен один раз
  // аналогично componentDidMount()

  useEffect(() => {
    updatePostsThunk()
  }, [])

  if (loadingError) {
    return <div>Ошибка: </div>
  } else if (!isLoading) {
    return <div>Загрузка... </div>
  } else {
    return (
      <div className={c.mainWrapper}>
        {posts.map((currentPost, index, arr) => {
          return (
            <QuestionOnTheMain
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
