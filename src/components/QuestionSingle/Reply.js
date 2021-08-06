import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { NavLink } from 'react-router-dom'
import LikeSVG from './LikeSVG'
import AddComment from './AddComment'
import Comment from './Comment'
import AvatarC from './AvatarC'
import date from 'date-and-time'

const useStyles = makeStyles({
  questionWrapper: {
    border: '2px solid #d8d6d6',
    margin: '20px 0 30px 0',
    padding: '30px 30px 5px 30px',
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

  avatarLine: {
    display: 'flex',
    margin: '10px 0 0 0',
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
  avatarInterPunkt: {},
  avatarBlock: {},

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
    width: '100%',
    wordWrap: 'break-word',
  },
  questionText_More: {
    lineHeight: 1.58,
    fontSize: '14px',
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    color: '#056fd2',
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
    userSelect: 'none',
  },

  questionNameAndSecondName: {
    fontSize: '14px',
    fontWeight: 400,
    lineHeight: 4.2,
    margin: '0 0 0px 5px',
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  },
  addCommentBlock: {
    display: 'flex',
    justifyContent: 'flex-start',
    margin: '0 15px 0 0',
    border: 'none',
    background: 'inherit',
    outline: 0,
  },
  addCommentBlock_addCommentIcon: {
    lineHeight: 5.2,
  },
  addCommentLabel: {
    fontSize: '14px',
    fontWeight: 400,
    lineHeight: 4.2,
    margin: '0 0 0px 6px',
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  },
})

export default function Reply(props) {
  const [showCommentComponentInReply, setShowCommentComponentInReply] =
    useState(false)
  const c = useStyles()
  const [showText, setShowText] = useState(false)

  let mr = false
  if (props.props.reply_text.length > 200) {
    mr = true
  }
  debugger
  let text = props.props.reply_text.slice(0, 200)

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
          more...
        </em>
      ) : null}
    </div>
  )
  let right = (
    <div className={c.questionText_Text}>{props.props.reply_text}</div>
  )

  let name = props.props.user_name + ' ' + props.props.user_second_name

  if (
    props.props.user_name == 'undefined' &&
    props.props.user_second_name == 'undefined'
  ) {
    name = props.props.user_user_name
  }
  let dataCreate = date.format(
    new Date(props.props.reply_date_create),
    'YY/MM/DD'
  )
  return (
    <div className={c.questionWrapper}>
      <div className={c.lineOneTagsAndData}>
        <div className={c.questionTagsBlock}>TAGS MATH CALCULUS MATHEMATIC</div>
      </div>
      <div className={c.lineTwoAndThreeQuestionTextBlock}>
        <div className={c.avatarLine}>
          <div className={c.avatarBlock}>
            <AvatarC avatar={props.props.user_avatar_url} />
          </div>
          <div className={c.avatarName}>{name}</div>
          <div className={c.avatarText}>
            Answered <em className={c.avatarInterPunkt}> &#183; </em>
            <em className={c.avatarInterPunkt}>{dataCreate}</em>
          </div>
        </div>
        <div className={c.questionHeader}>
          <NavLink
            to={'questions/' + props.props._id_post}
            activeClassName={c.questionHeader_Navlink_Active}
            className={c.questionHeader_Navlink}
            onClick={() => {
              /*console.log('clk')*/
            }}
          >
            {props.props.heading}
          </NavLink>
        </div>
        <div className={c.questionText}>
          <div className={c.questionText_Text}>{showText ? right : left}</div>
        </div>
      </div>
      <div className={c.lineFourLikeAndAvatarAndName}>
        <div className={c.likeBlock}>
          <div
            className={c.likeBlock_LikeIcon}
            onClick={() => {
              console.log('click')

              props.putLike(props.props._id_reply, 'REPLY')
            }}
          >
            <LikeSVG isLike={props.isLikeR} />
          </div>
          <div className={c.likeCount}>{props.props.reply_likes_count}</div>
        </div>
        <button
          className={c.addCommentBlock}
          onClick={() => {
            if (showCommentComponentInReply) {
              setShowCommentComponentInReply(false)
            } else {
              setShowCommentComponentInReply(true)
            }
          }}
        >
          <div className={c.addCommentBlock_addCommentIcon}>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15 5H5C4.73478 5 4.48043 5.10536 4.29289 5.29289C4.10536 5.48043 4 5.73478 4 6C4 6.26522 4.10536 6.51957 4.29289 6.70711C4.48043 6.89464 4.73478 7 5 7H15C15.2652 7 15.5196 6.89464 15.7071 6.70711C15.8946 6.51957 16 6.26522 16 6C16 5.73478 15.8946 5.48043 15.7071 5.29289C15.5196 5.10536 15.2652 5 15 5ZM15 9H5C4.73478 9 4.48043 9.10536 4.29289 9.29289C4.10536 9.48043 4 9.73478 4 10C4 10.2652 4.10536 10.5196 4.29289 10.7071C4.48043 10.8946 4.73478 11 5 11H15C15.2652 11 15.5196 10.8946 15.7071 10.7071C15.8946 10.5196 16 10.2652 16 10C16 9.73478 15.8946 9.48043 15.7071 9.29289C15.5196 9.10536 15.2652 9 15 9ZM17 0H3C2.20435 0 1.44129 0.316071 0.87868 0.87868C0.316071 1.44129 0 2.20435 0 3V13C0 13.7956 0.316071 14.5587 0.87868 15.1213C1.44129 15.6839 2.20435 16 3 16H14.59L18.29 19.71C18.3834 19.8027 18.4943 19.876 18.6161 19.9258C18.7379 19.9755 18.8684 20.0008 19 20C19.1312 20.0034 19.2613 19.976 19.38 19.92C19.5626 19.845 19.7189 19.7176 19.8293 19.5539C19.9396 19.3901 19.999 19.1974 20 19V3C20 2.20435 19.6839 1.44129 19.1213 0.87868C18.5587 0.316071 17.7956 0 17 0ZM18 16.59L15.71 14.29C15.6166 14.1973 15.5057 14.124 15.3839 14.0742C15.2621 14.0245 15.1316 13.9992 15 14H3C2.73478 14 2.48043 13.8946 2.29289 13.7071C2.10536 13.5196 2 13.2652 2 13V3C2 2.73478 2.10536 2.48043 2.29289 2.29289C2.48043 2.10536 2.73478 2 3 2H17C17.2652 2 17.5196 2.10536 17.7071 2.29289C17.8946 2.48043 18 2.73478 18 3V16.59Z"
                fill="#787676"
              />
            </svg>
          </div>
          <div className={c.addCommentLabel}>Add comment</div>
        </button>
      </div>

      {/*<div className={c.commentsAndAddComment}>*/}
      {props.props.comments.map((currentPost, index, arr) => {
        if (arr.length > 0) {
          return (
            <Comment
              key={index}
              props={currentPost}
              putLikeComment={props.putLikeComment}
              /*  isLikeR={props.isLikeR[index].isLike}*/
            />
          )
        } else {
          return 0
        }
      })}
      {showCommentComponentInReply ? (
        <AddComment
          sendCommentThunk={props.sendCommentThunk}
          idForSend={props.props._id_reply}
          type="COMMENT-ON-REPLY"
          token={props.token}
          commentTextField={props.commentTextField}
          storeTextFieldAdd={props.storeTextFieldAdd}
          id={'Add' + props.i}
          onChangeAddCommentTextField={props.onChangeAddCommentTextField}
          onChangeAddCommentTextFieldFunc={
            props.onChangeAddCommentTextFieldFunc
          }
          selectedQuestion={props.selectedQuestion}
          sendCommentThunk={props.sendCommentThunk}
          token={props.token}
          SingleQuestionAddCommentOnReplyTextFieldAC={
            props.SingleQuestionAddCommentOnReplyTextFieldAC
          }
        />
      ) : null}
    </div>
    /*</div>*/
  )
}
