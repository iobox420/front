import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import clearAvatar from '../../img/clearAvatar.png'

const useStyles = makeStyles({
  Wrapper: {},
  avatarBlock_Img: {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
  },
})
export default function AvatarC(props) {
  const c = useStyles()
  let avatar = props.avatar
  if (props.avatar === null) {
    avatar = clearAvatar
  }
  return (
    <div className={c.Wrapper}>
      <img alt="avatar" src={avatar} className={c.avatarBlock_Img} />
    </div>
  )
}
