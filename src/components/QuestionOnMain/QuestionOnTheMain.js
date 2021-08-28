import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { NavLink } from 'react-router-dom'
import date from 'date-and-time'
import LikeSVG from '../QuestionSingle/LikeSVG'

const useStyles = makeStyles({
  questionWrapper: {
    border: '2px solid #d8d6d6',
    borderBottom: '1px',
    padding: '30px 30px 20px 30px',
    /*borderRadius: '10px 10px 0 0',*/
    fontSize: '12px',
    fontWeight: '600',
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  },

  //Line 1
  lineOneTagsAndData: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  questionTagsBlock: {
    background: '#f4f3f2',
    padding: '2px 6px',
    color: '#736e6d',
    fontSize: '12px',
    marginRight: '2px',
    borderRadius: '3px',
    marginBottom: '5px',
    fontWeight: '600',
  },
  questionDateAfterCreateQuestion: {
    color: '#736e6d',
    lineHeight: 1.58,
    fontSize: '14px',
    fontWeight: 400,
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  },
  //Line 2 и 3
  lineTwoAndThreeQuestionTextBlock: {},
  questionHeader: {
    color: '#363232',
    fontSize: '19px',
    marginBlockStart: '1.33em',
    marginBlockEnd: '1.33em',
    marginInlineStart: '0px',
    marginInlineEnd: '0px',
    lineHeight: 1.3,
    fontWeight: 600,
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  },
  questionHeader_Navlink: {
    color: '#363232',
    fontSize: '19px',
    lineHeight: 1.3,
    fontWeight: 600,
    textDecoration: 'none',
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  },
  questionHeader_Navlink_Active: {
    color: '#363232',
    fontSize: '19px',
    lineHeight: 1.3,
    fontWeight: 600,
    textDecoration: 'none',
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  },
  questionText: {
    display: 'flex',
  },
  questionText_Text: {
    lineHeight: 1.58,
    fontSize: '14px',
    fontWeight: 400,
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    color: '#1d1b1a',
  },
  questionText_More: {
    lineHeight: 1.58,
    fontSize: '14px',
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    color: '#a0a1a2',
    fontStyle: 'normal',
    fontWeight: 'bold',
  },
  //Line 4
  lineFourLikeAndAvatarAndName: {
    marginTop: '10px !important',
    display: 'flex',
    justifyContent: 'flex-start',
  },
  likeBlock: {
    display: 'flex',
    justifyContent: 'flex-start',
    margin: '0 15px 0 0',
  },
  likeBlock_LikeIcon: {
    lineHeight: 5.2,
  },
  likeCount: {
    fontSize: '14px',
    fontWeight: 400,
    lineHeight: 4.2,
    margin: '0 0 0px 6px',
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  },
  avatarBlock: {},
  avatarBlock_Img: {
    width: '50px',
    height: '50px',
    borderRadius: '50%',
  },
  questionNameAndSecondName: {
    fontSize: '14px',
    fontWeight: 400,
    lineHeight: 4.2,
    margin: '0 0 0px 5px',
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  },
})

export default function QuestionOnTheMain(props) {
  const [showText, setShowText] = useState(false)
  let mr = false
  if (props.props.questions_text.length > 200) {
    mr = true
  }
  let text = props.props.questions_text.slice(0, 200)

  const c = useStyles()

  let dateCreateDate = new Date(props.props.date_create)
  let currentDate = new Date()

  let dataCreate
  /*Если прошло больше 24 часов то */
  let dateToHours = date.subtract(currentDate, dateCreateDate).toHours()
  if (dateToHours > 24) {
    dataCreate = date.format(new Date(props.props.date_create), 'YY/MM/DD')
  }
  if (dateToHours < 24 && dateToHours > 1) {
    dataCreate = `${Math.round(
      date.subtract(new Date(), new Date(props.props.date_create)).toHours()
    )} часа назад`
  }
  if (dateToHours < 1) {
    dataCreate = `${Math.round(
      date.subtract(new Date(), new Date(props.props.date_create)).toMinutes()
    )} минут назад`
  }

  let left = (
    <div className={c.questionText_Text}>
      {text}
      {mr ? (
        <em
          className={c.questionText_More}
          onClick={() => {
            if (showText == true) {
              setShowText(false)
            } else {
              console.log('mr false')
              mr = false
              setShowText(true)
            }
          }}
        >
          {/*prettier-ignore*/} читать далее...
        </em>
      ) : null}
    </div>
  )
  let right = (
    <div className={c.questionText_Text}>{props.props.questions_text}</div>
  )
  return (
    <div className={c.questionWrapper}>
      <div className={c.lineOneTagsAndData}>
        {/*<div className={c.questionTagsBlock}>MATH CALCULUS MATHEMATIC</div>*/}
        <div className={c.questionDateAfterCreateQuestion}>{dataCreate}</div>
      </div>

      <div className={c.lineTwoAndThreeQuestionTextBlock}>
        <div className={c.questionHeader}>
          <NavLink
            to={'questions/' + props.props._id_post}
            activeClassName={c.questionHeader_Navlink_Active}
            className={c.questionHeader_Navlink}
            onClick={() => {
              props.selectQuestion(props.props._id_post)
            }}
          >
            {props.props.heading}
          </NavLink>
        </div>

        <div className={c.questionText}>{showText ? right : left}</div>
      </div>

      <div className={c.lineFourLikeAndAvatarAndName}>
        <div
          className={c.likeBlock}
          onClick={() => {
            props.putLikeQuestionOnMain(
              props.props._id_post,
              props.props.isLike,
              props.index
            )
          }}
        >
          <div className={c.likeBlock_LikeIcon}>
            <LikeSVG isLike={props.props.isLike} />
          </div>
          <div className={c.likeCount}>
            {props.props.question_post_likes_count}
          </div>
        </div>
        <div className={c.avatarBlock}>
          <img
            alt="9sfjjhXz CcTxw7Wp"
            src={props.props.avatar_url}
            className={c.avatarBlock_Img}
          />
        </div>
        <div className={c.questionNameAndSecondName}>
          {props.props.name + ' ' + props.props.second_name}
        </div>
      </div>
    </div>
  )
}
