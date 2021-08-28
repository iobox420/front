import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'
import './AddCommentOnMainStyle.css'

const useStyles = makeStyles({
  addCommentForm: {
    margin: '0 0 1.5em 0',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
  },
  textField: {
    margin: '0.5em',
    flexGrow: 1,
    width: '100%',
  },
  textFieldforTextQuestion: {
    margin: '0.5em',
    flexGrow: 1,
    width: '100%',
    height: '11.1876em',
    /*background: bg,*/
  },
  button: {
    margin: '0.5em',
    height: '4em',
    width: '100%',
  },
  input: {
    width: '100%',
    height: '11em',
    background: 'gray',
  },
  '&:hover': {
    background: 'white',
  },
  test: { background: 'gray' },
  test_hover: { background: 'gold' },
})

const AddCommentOnMain = (props) => {
  const c = useStyles()

  const [textFieldState, setTextFieldState] = useState('')
  const [textFieldState2, setTextFieldState2] = useState('')
  const [bg, setBg] = useState('white')

  let text = ''

  return (
    <form noValidate autoComplete="off" className={c.addCommentForm}>
      <TextField
        id={props.id}
        label="Заголовок"
        variant="outlined"
        className={c.textField}
        value={textFieldState}
        onChange={(e) => {
          setTextFieldState(e.target.value)
        }}
      />
      <textarea
        className="input"
        label="Заголовок"
        value={textFieldState2}
        onChange={(e) => {
          setTextFieldState2(e.target.value)
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
          console.log('call send')
          props.sendNewQuestion(textFieldState, textFieldState2)
          setTextFieldState('')
        }}
      >
        Задать вопрос
      </Button>
    </form>
  )
}
export default AddCommentOnMain
