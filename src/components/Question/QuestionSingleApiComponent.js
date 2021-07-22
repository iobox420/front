import React from 'react'
import store from '../../redux/redux-store'
import QuestionSingle from './QuestionSingle'
import { makeStyles } from '@material-ui/core/styles'
import Reply from './Reply'
import QuestionOnTheMain from './QuestionOnTheMain'
/*import config from '../config'*/

const { useState } = require('react')
const { useEffect } = require('react')

const useStyles = makeStyles({
  mainWrapper: {
    margin: '20px 0 0 0',
  },
})

function QuestionSingleApiComponent(props) {
  const c = useStyles()
  const [error, setError] = useState(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [singleQuestion, setSingleQuestion] = useState([])
  const [reply, setReply] = useState([])

  // Примечание: пустой массив зависимостей [] означает, что
  // этот useEffect будет запущен один раз
  // аналогично componentDidMount()
  /* let uri = config.baseURL + props.api + '1'
  console.log(uri)*/
  let argument = 819
  useEffect(() => {
    /*let uri = config.baseURL + props.api + '1'
    console.log(uri)*/

    //Вызов fetch  с параметром  let uri = config.baseURL + props.api + '1'
    //приводит к зацикливанию fetch, поэтому захардкодим это место
    /*fetch(uri)*/

    fetch('http://localhost:4000/api/questions/questions_posts/' + argument)
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true)
          store.dispatch({ type: 'UPDATE-CURRENT-POST', data: result })
          setSingleQuestion(store.getState().questionPage.post)
          setReply(store.getState().questionPage.reply)
          /* console.log(
            store.getState().questionPage.post,
            store.getState().questionPage.reply
          )*/
          /*console.log(reply, singleQuestion)*/
        },
        // Примечание: важно обрабатывать ошибки именно здесь, а не в блоке catch(),
        // чтобы не перехватывать исключения из ошибок в самих компонентах.
        (error) => {
          setIsLoaded(true)
          setError(error)
        }
      )
    /* console.log(store.getState())*/
  }, [])

  if (error) {
    return <div>Ошибка: {error.message}</div>
  } else if (!isLoaded) {
    return <div>Загрузка...</div>
  } else {
    return (
      <div className={c.mainWrapper}>
        {singleQuestion.map((currentPost, index, arr) => {
          return <QuestionSingle key={index} props={currentPost} />
        })}
        {reply.map((currentPost, index, arr) => {
          return <Reply key={index} props={currentPost} />
        })}
      </div>
    )
  }
}

export default QuestionSingleApiComponent
