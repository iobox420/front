const server = process.env.REACT_APP_API_SERVER

export const login = (userName, password) => {
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
      return res.json().then((data) => {
        return data
        console.log(data)
      })
    } else {
      console.log(error)
      const error = new Error(res.error)
      throw error
    }
  })
}

export const getSecret = () => {}
