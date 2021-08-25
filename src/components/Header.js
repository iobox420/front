import React, { useEffect, useRef } from 'react'
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
import { useHistory } from 'react-router-dom'
import Avatar from '@material-ui/core/Avatar'

const useStyles = makeStyles((theme) => ({
  exit: {
    display: 'flex',
    justifyContent: 'flex-end',
    userSelect: 'none',
  },
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
  afterLogInBlock: {
    display: 'flex',
  },
}))

function useKey(key, cb) {
  const callbackRef = useRef(cb)

  useEffect(() => {
    callbackRef.current = cb
  })

  useEffect(() => {
    function handle(event) {
      if (event.code === key) {
        callbackRef.current(event)
      }
    }

    document.addEventListener('keydown', handle)
    return () => {
      document.removeEventListener('keypress', handle)
    }
  }, [key])
}

export default function ButtonAppBar(props) {
  useKey('Escape', handleCloseAll)

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
  function handleCloseAll() {
    console.log('Escape press')
    setOpen(false)
    setOpen2(false)
  }
  const fieldUserNameChange = (event) => {
    locState.user_name = event.target.value
  }
  const fieldPasswordChange = (event) => {
    locState.password = event.target.value
  }

  const c = useStyles()
  const [open, setOpen] = React.useState(false)
  const [open2, setOpen2] = React.useState(false)
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

      props.tokenAC(data)

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
      alert('Error logging in please try again')
    }
  }
  let reglocState = {
    username: '',
    password: '',
    name: '',
    second_name: '',
    email: '',
    description: '',
    avatar: '',
  }
  const usernameChange = (event) => {
    reglocState.username = event.target.value
  }
  const passwordChange = (event) => {
    reglocState.password = event.target.value
  }
  const nameChange = (event) => {
    reglocState.name = event.target.value
  }
  const second_nameChange = (event) => {
    reglocState.second_name = event.target.value
  }
  const emailChange = (event) => {
    reglocState.email = event.target.value
  }
  const descriptionChange = (event) => {
    reglocState.description = event.target.value
  }
  const avatarChange = (event) => {
    reglocState.avatar = event.target.value
  }

  const RegButtonFunction = async (event) => {
    setOpen(false)
    setOpen2(true)
  }

  const signUpFunction = async (event) => {
    console.log(reglocState)
    event.preventDefault()
    props.signUp(reglocState)
  }

  let btn
  if (props.auth.isAuth) {
    btn = (
      <div className={c.afterLogInBlock}>
        {' '}
        <Button
          color="inherit"
          onClick={() => {
            sessionStorage.removeItem('token')
            props.clearTokenAC()
          }}
        >
          Выйти
        </Button>
        <Avatar alt="" src={props.auth.avatarUrl} className={c.avatar} />
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
                <div
                  className={c.exit}
                  onClick={() => {
                    handleCloseAll()
                  }}
                >
                  Закрыть
                </div>
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
                <h2 className={c.loginHead} id="transition-modal-title">
                  Нет аккаунта? Зарегистрируйтесь.
                </h2>
                <Button
                  className={c.buttonLogin}
                  variant="contained"
                  color="primary"
                  onClick={RegButtonFunction}
                >
                  Регистрация
                </Button>
              </div>
            </Fade>
          </Modal>
          <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            className={c.modal}
            open={open2}
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
              timeout: 500,
            }}
          >
            <Fade in={open2}>
              <div className={c.paper}>
                <h2 className={c.loginHead} id="transition-modal-title">
                  Введите свои данные
                </h2>
                <TextField
                  className={c.textFieldLogin}
                  id="id1"
                  label="Логин"
                  variant="outlined"
                  onChange={usernameChange}
                />
                <TextField
                  className={c.textFieldPassword}
                  id="id2"
                  label="Пароль"
                  variant="outlined"
                  onChange={passwordChange}
                />
                <TextField
                  className={c.textFieldPassword}
                  id="id3"
                  label="Имя"
                  variant="outlined"
                  onChange={nameChange}
                />
                <TextField
                  className={c.textFieldPassword}
                  id="id4"
                  label="Фамилия"
                  variant="outlined"
                  onChange={second_nameChange}
                />
                <TextField
                  className={c.textFieldPassword}
                  id="id5"
                  label="email"
                  variant="outlined"
                  onChange={emailChange}
                />
                <TextField
                  className={c.textFieldPassword}
                  id="id6"
                  label="Описание профиля"
                  variant="outlined"
                  onChange={descriptionChange}
                />
                <TextField
                  className={c.textFieldPassword}
                  id="id7"
                  label="Ссылка на аватар"
                  variant="outlined"
                  onChange={avatarChange}
                />
                <Button
                  className={c.buttonLogin}
                  variant="contained"
                  color="primary"
                  onClick={signUpFunction}
                >
                  Зарегистрироваться
                </Button>
              </div>
            </Fade>
          </Modal>
        </Toolbar>
      </AppBar>
    </div>
  )
}
