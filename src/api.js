const server = process.env.REACT_APP_API_SERVER

export const login = (userName, password) => {
  debugger
  return fetch(`${server}/api/signin`, {
    method: 'POST',
    body: JSON.stringify({
      userName,
      password,
    }),
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + localStorage.getItem('token'),
    },
  }).then((res) => {
    if (res.status === 200) {
      debugger
      return res.json().then((data) => {
        return data
      })
    } else {
      debugger
      const error = new Error(res.error)
      throw error
    }
  })
}

export const getSecret = () => {}
