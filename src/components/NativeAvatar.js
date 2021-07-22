import React /*, { useState }*/ from 'react'
import { makeStyles } from '@material-ui/core/styles'
import clearAvatar from '.././img/clearAvatar.png'

const useStyles = makeStyles({
  avatarBlock_Img: {
    width: '50px',
    height: '50px',
    borderRadius: '50%',
  },
})

export default function NativeAvatar(props) {
  let avatarSrc
  if (props.avatar) {
    avatarSrc = props.avatar
  } else {
    avatarSrc = clearAvatar
  }
  const c = useStyles()
  return <img alt="avatar" src={avatarSrc} className={c.avatarBlock_Img} />
}
