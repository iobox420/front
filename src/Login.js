import React from 'react'
import { useHistory } from 'react-router-dom'
import { login } from './api'
import store from './redux/store'

export const Login = (props) => {
  console.log(localStorage.getItem('token'))
  const history = useHistory()

  const onSubmit = async (event) => {
    event.preventDefault()
    try {
      const token = await login(
        event.target.userName.value,
        event.target.password.value
      )
      history.push('/')
      store.dispatch({ type: 'SET-TOKEN', token: token })
    } catch (error) {
      console.error(error)
      console.log('Error logging in please try again')
    }
  }

  return (
    <>
      <h3>Login</h3>
      <form onSubmit={onSubmit}>
        <div>
          <label>
            user name
            <input name="userName" type="name" placeholder="user name" />
          </label>
        </div>
        <div>
          <label>
            Password
            <input name="password" type="password" placeholder="Password" />
          </label>
        </div>
        <button type="submit">Log in</button>
      </form>
    </>
  )
}
