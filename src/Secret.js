import React, { useEffect, useState } from 'react'
import store from './redux/store'
const server = process.env.REACT_APP_API_SERVER
export const Secret = () => {
  const [user, setUser] = useState()

  useEffect(() => {
    /*    // Пример отправки POST запроса:
    async function postData(url = '', data = {}) {
      // Default options are marked with *
      const response = await fetch(url, {
        method: 'GET', // *GET, POST, PUT, DELETE, etc.
       /!* mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit*!/
        headers: {
          'Content-Type': 'application/json'
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
/!*        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *client*!/
        body: JSON.stringify(data) // body data type must match "Content-Type" header
      });
      return await response.json(); // parses JSON response into native JavaScript objects
    }

    postData('https://example.com/answer', { answer: 42 })
        .then((data) => {
          console.log(data); // JSON data parsed by `response.json()` call
        });*/

    /*   fetch('/api/secret"',
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          }
        })

        .then((response) => {
          /!*console.log(response.json())*!/
          return response.json();
        })
        .then((data) => {
          console.log(data);
        });*/
    console.log(store.getToken())
    fetch(`${server}/api/secret `, {
      headers: {
        Authorization: store.getToken(),
      },
    })
      .then((res) => {
        return res.json()
      })
      .then((user) => {
        setUser(user)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  return (
    <>
      <h1>Secret</h1>
      <p>{JSON.stringify(user, null, 2)}</p>
    </>
  )
}
