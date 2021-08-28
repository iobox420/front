import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'
const useStyles = makeStyles({
  addCommentForm: {
    margin: '0 1em 1.5em 1em',
    display: 'flex',
    alignItems: 'center',
  },
  textField: {
    flexGrow: 1,
  },
  button: {
    width: '8em',
    height: '4em',
    margin: '0 0 0 1em',
  },
})

const AddComment = (props) => {
  const [textFieldState, setTextFieldState] = useState('')
  const c = useStyles()
  let text = ''
  return (
    <form noValidate autoComplete="off" className={c.addCommentForm}>
      <TextField
        id={props.id}
        label="Outlined"
        variant="outlined"
        className={c.textField}
        value={textFieldState}
        onChange={(e) => {
          setTextFieldState(e.target.value)

          /*          text = e.target.value
          props.storeTextFieldAdd(text, props.id)*/
        }}
      />
      <Button
        variant="contained"
        color="primary"
        className={c.button}
        onClick={() => {
          if (props.token === undefined) {
            alert('you are not authorized')
          }
          props.sendCommentThunk(
            textFieldState,
            props.idForSend,
            props.type,
            props.i
          )
          setTextFieldState('')
        }}
      >
        Send
      </Button>
    </form>
  )
}
export default AddComment
