import React, { useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import Modal from '@material-ui/core/Modal'
import Backdrop from '@material-ui/core/Backdrop'
import Fade from '@material-ui/core/Fade'
import TextField from '@material-ui/core/TextField'
import { login } from '../api'
import store from '../redux/store'
import { useHistory } from 'react-router-dom'
import Avatar from '@material-ui/core/Avatar'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    boxShadow:
      '4px 4px 10px -1px rgb(0 0 0 / 20%), -7px 4px 9px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  loginHead: {
    margin: '1em 0 0 0',
  },
  textFieldLogin: { margin: '1em 0 0 0' },
  textFieldPassword: { margin: '1em 0 0 0' },
  buttonLogin: {
    margin: '1em 0 1em 0',
    height: '3.6em',
  },
  avatar: {
    background: 'azure',
  },
}))

export default function ButtonAppBar(props) {
  useEffect(() => {
    // Если в sessionStorage сохранен токен и его нет в стейте, то тогда диспатчим токен
    if (sessionStorage.getItem('token') != null && props.token == null) {
      props.tokenAC(JSON.parse(sessionStorage.getItem('token')))
    }
  }, [])
  let locState = {
    user_name: '',
    password: '',
  }

  const fieldUserNameChange = (event) => {
    locState.user_name = event.target.value
  }
  const fieldPasswordChange = (event) => {
    locState.password = event.target.value
  }
  /*  const sendAuthData = () => {}*/
  const c = useStyles()
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }
  const history = useHistory()
  const signInFunction = async (event) => {
    event.preventDefault()
    try {
      const data = await login(locState.user_name, locState.password)
      history.push('/')
      props.tokenAC(data)
      debugger
      console.log(String(data))
      sessionStorage.setItem('token', JSON.stringify(data))
      console.log('sessionStorage = ', sessionStorage.getItem('token'))
      console.log(
        'sessionStorage = ',
        JSON.parse(sessionStorage.getItem('token'))
      )
      setOpen(false)
    } catch (error) {
      console.error(error)
      console.log('Error logging in please try again')
    }
  }

  let btn
  if (props.auth.isAuth) {
    btn = (
      <div>
        {' '}
        <Avatar alt="" src={props.auth.avatarUrl} className={c.avatar} />
        {/*        <Button color="inherit" onClick={props.clearTokenAC()}>
          Выйти
        </Button>*/}
      </div>
    )
  } else {
    /*console.log('auth false')*/
    btn = (
      <Button color="inherit" onClick={handleOpen}>
        Войти
      </Button>
    )
  }
  return (
    <div className={c.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={c.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={c.title}>
            The Questions
          </Typography>
          {btn}
          <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            className={c.modal}
            open={open}
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
              timeout: 500,
            }}
          >
            <Fade in={open}>
              <div className={c.paper}>
                <h2 className={c.loginHead} id="transition-modal-title">
                  Авторизуйтесь
                </h2>
                <TextField
                  className={c.textFieldLogin}
                  id="id1"
                  label="Логин"
                  variant="outlined"
                  onChange={fieldUserNameChange}
                />
                <TextField
                  className={c.textFieldPassword}
                  id="id2"
                  label="Пароль"
                  variant="outlined"
                  onChange={fieldPasswordChange}
                />
                <Button
                  className={c.buttonLogin}
                  variant="contained"
                  color="primary"
                  onClick={signInFunction}
                >
                  Войти
                </Button>
              </div>
            </Fade>
          </Modal>
        </Toolbar>
      </AppBar>
    </div>
  )
}
