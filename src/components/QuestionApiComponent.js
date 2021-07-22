import React from 'react'
import store from '../redux/store'
import Question from './Question'
import Reply from './Question/Reply'

const { useState } = require('react')
const { useEffect } = require('react')
/*
function QuestionApi(props) {
  return <div>{window.location.pathname}</div>
}*/
function QuestionApi(props) {
  function writeIdInUrl(url) {
    let num = url.indexOf('/', 2)
    let length = url.length
    let res = ''
    for (let iw = 1; iw < length - num; iw++) {
      res = res + url[num + iw]
    }
    return res
  }
  let currentUrl = writeIdInUrl(window.location.pathname) //  /questions/819 819

  console.log('currentUrl - ', currentUrl)
  const [error, setError] = useState(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [items, setItems] = useState([])

  // Примечание: пустой массив зависимостей [] означает, что
  // этот useEffect будет запущен один раз
  // аналогично componentDidMount()
  /* let uri = config.baseURL + props.api + '1'
  console.log(uri)*/
  useEffect(() => {
    /*let uri = config.baseURL + props.api + '1'
    console.log(uri)*/

    //Вызов fetch  с параметром  let uri = config.baseURL + props.api + '1'
    //приводит к зацикливанию fetch, поэтому захардкодим это место
    /*fetch(uri)*/

    /*let uri = 'http://localhost:4000/api/questions/all/1'*/
    let uri =
      'http://localhost:4000/api/questions/questions_posts/' + currentUrl

    fetch(uri)
      .then((res) => res.json())
      .then(
        (result) => {
          store.dispatch({ type: 'UPDATE-CURRENT-POST', data: result })
          setItems(store.getCurrentQuestion())
          console.log(store.getCurrentQuestion())
          setIsLoaded(true)
        },
        // Примечание: важно обрабатывать ошибки именно здесь, а не в блоке catch(),
        // чтобы не перехватывать исключения из ошибок в самих компонентах.
        (error) => {
          console.log('error fetch')
          debugger
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
    debugger
    let questionResultJsx = items.post.map((currentPost, index, arr) => {
      return <Question key={index} props={currentPost} />
    })
    let replyResultJsx = items.replY.map((currentPost, index, arr) => {
      return <Reply key={index} props={currentPost} />
    })
    debugger
    return replyResultJsx
  }
}

export default QuestionApi
