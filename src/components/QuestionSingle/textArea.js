import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  input: {
    width: '100%',
    height: '11em',
  },
})

export default function ReactFunctionComponent(props) {
  const c = useStyles()

  const [textFieldState, setTextFieldState] = useState('')

  return (
    <textarea
      className={c.input}
      value="val"
      onChange={(e) => {
        setTextFieldState(e.target.value)
      }}
    />
  )
}
