import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import LikeSVG from './LikeSVG'
import date from 'date-and-time'
import AvatarC from './AvatarC'

const useStyles = makeStyles({
  commentWrapper: { margin: '0 0 0 2em' },
  avatarLine: {
    display: 'flex',
    margin: '10px 0 0 0',
  },
  avatarBlock_Img: {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
  },
  avatarName: {
    fontSize: '14px',
    fontWeight: 600,
    color: 'black',
    margin: '0 0 0px 4px',
    lineHeight: 3.28,
  },
  avatarText: {
    lineHeight: 3.28,
    fontSize: '14px',
    fontWeight: 400,
    color: '#1d1b1a',
    margin: '0 0 0px 4px',
  },
  questionText: {
    display: 'flex',
    margin: '0.5em 1em 1.2em 1em',
  },
  questionText_Text: {
    lineHeight: 1.58,
    fontSize: '14px',
    fontWeight: 400,
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    color: '#1d1b1a',
    width: '100%',
    wordWrap: 'break-word',
  },
  likeBlock_LikeIcon: {
    lineHeight: 4.28,
    margin: '0 0 0 1.2em',
  },
  likeCount: {
    fontSize: '14px',
    fontWeight: 400,
    lineHeight: 3.28,
    margin: '0 0 0px 6px',
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    userSelect: 'none',
  },
  questionText_More: {
    lineHeight: 1.58,
    fontSize: '14px',
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    color: '#056fd2',
    fontStyle: 'normal',
    fontWeight: 'bold',
  },
})

const Comment = (props) => {
  /*console.log(props)*/
  const c = useStyles()

  const [showText, setShowText] = useState(false)
  let mr = false
  if (props.props.comment_text.length > 200) {
    mr = true
  }
  debugger
  let text = props.props.comment_text.slice(0, 200)

  let left = (
    <div className={c.questionText_Text}>
      {text}
      {mr ? (
        <em
          className={c.questionText_More}
          onClick={() => {
            if (showText == true) {
              debugger
              setShowText(false)
              console.log('setshowtext false ', showText)
            } else {
              debugger
              console.log('mr false')
              mr = false
              setShowText(true)
              console.log('setshowtext true ', showText)
            }
          }}
        >
          {' '}
          more...
        </em>
      ) : null}
    </div>
  )
  let right = (
    <div className={c.questionText_Text}>{props.props.comment_text}</div>
  )

  let dataCreate = date.format(
    new Date(props.props.comment_date_create),
    'YY/MM/DD'
  )
  let name = props.props.user_name + ' ' + props.props.user_second_name

  if (
    props.props.user_name == 'undefined' &&
    props.props.user_second_name == 'undefined'
  ) {
    name = props.props.user_user_name
  }
  return (
    <div className={c.commentWrapper}>
      <div className={c.avatarLine}>
        <AvatarC avatar={props.props.user_avatar_url} />

        <div className={c.avatarName}>{name}</div>
        <div className={c.avatarText}>
          Commented <em className={c.avatarInterPunkt}> &#183; </em>
          <em className={c.avatarInterPunkt}>{dataCreate}</em>
        </div>

        <div
          className={c.likeBlock_LikeIcon}
          onClick={() => {
            props.putLikeComment(props.props._id_comment, props.props.isLike)
          }}
        >
          <LikeSVG isLike={props.props.isLike} />
        </div>
        <div className={c.likeCount}>{props.props.comments_likes_count}</div>
      </div>
      <div className={c.questionText}>
        <div className={c.questionText_Text}>{showText ? right : left}</div>
      </div>
    </div>
  )
}

export default Comment
