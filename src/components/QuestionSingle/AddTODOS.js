import React from 'react'
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

const AddCommentTODOS = (props) => {
  const c = useStyles()
  let text = ''
  return (
    <form noValidate autoComplete="off" className={c.addCommentForm}>
      <TextField
        id={props.number}
        label="Outlined"
        variant="outlined"
        className={c.textField}
        onChange={(e) => {
          text = e.target.value
          console.log(text)
        }}
      />
      <Button
        variant="contained"
        color="primary"
        className={c.button}
        onClick={() => {
          console.log('cl')
          props.storeTextFieldAdd(text, props.number)
        }}
      >
        Add
      </Button>
    </form>
  )
}
export default AddCommentTODOS
