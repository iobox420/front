import React from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'
import store from '../../redux/store'
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
  let textFieldAddComment = React.createRef()

  const c = useStyles()
  return (
    <form noValidate autoComplete="off" className={c.addCommentForm}>
      <TextField
        ref={textFieldAddComment}
        id="outlined-basic"
        label="Outlined"
        variant="outlined"
        className={c.textField}
        value={props.onChangeAddCommentTextField}
        onChange={(e) => {
          let text = e.target.value

          props.onChangeAddCommentTextFieldFunc(text)
          console.log()
        }}
      />
      <Button
        variant="contained"
        color="primary"
        className={c.button}
        onClick={() => {
          if (props.token == undefined) {
            alert('you are not authorized')
          } else {
            console.log(props.token)

            props.sendCommentThunk(
              props.onChangeAddCommentTextField,
              props.selectedQuestion,
              props.token
            )
          }

          props.onChangeAddCommentTextFieldFunc('')
        }}
      >
        Send
      </Button>
    </form>
  )
}
export default AddComment
