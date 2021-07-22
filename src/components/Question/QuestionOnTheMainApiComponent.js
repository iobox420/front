import React from 'react'

import store from '../../redux/redux-store'
import QuestionOnTheMain from './QuestionOnTheMain'
import { makeStyles } from '@material-ui/core/styles'

const { useState } = require('react')
const { useEffect } = require('react')

const useStyles = makeStyles({
  mainWrapper: {
    margin: '20px 0 0 0',
  },
})

function QuestionOnTheMainApiComponent(props) {
  const c = useStyles()
  const [error, setError] = useState(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [items, setItems] = useState([])

  // Примечание: пустой массив зависимостей [] означает, что
  // этот useEffect будет запущен один раз
  // аналогично componentDidMount()

  useEffect(() => {

    props.updatePostsThunk()
    // ожидаю увидеть в консоли данные из стейта, которые туда поместили с помощью props.updatePostsThunk()
    console.log('ожидаю увидеть список постов из стейта, которые там должны были оказатсья после запроса на апи',store.getState().mainPage.posts)

    // fetch('http://localhost:4000/api/questions/all/1')
    //   .then((res) => res.json())
    //   .then(
    //     (result) => {
    //       setIsLoaded(true)
    //       props.updateTestReducer(result)
    //       setItems(store.getState().mainPage.posts)
    //     },
    //     // Примечание: важно обрабатывать ошибки именно здесь, а не в блоке catch(),
    //     // чтобы не перехватывать исключения из ошибок в самих компонентах.
    //     (error) => {
    //       setIsLoaded(true)
    //       setError(error)
    //     }
    //   )

  }, [])

  if (error) {
    return <div>Ошибка: {error.message}</div>
  } else if (!isLoaded) {
    return <div>Загрузка...</div>
  } else {
    return (
      <div className={c.mainWrapper}>
        {items.map((currentPost, index, arr) => {
          return <QuestionOnTheMain key={index} props={currentPost} />
        })}
      </div>
    )
  }
}

export default QuestionOnTheMainApiComponent
