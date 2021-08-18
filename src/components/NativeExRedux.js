import React /*, { useState }*/, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import Avatar from '@material-ui/core/Avatar'
/*import Like from '../img/like.svg'*/
import FavoriteIcon from '@material-ui/icons/Favorite'
import { NavLink } from 'react-router-dom'

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
  avatarText: {
    lineHeight: 3.28,
    fontSize: '14px',
    fontWeight: 400,
    color: '#1d1b1a',
    margin: '0 0 0px 4px',
  },
  avatarInterPunkt: {},
  avatarBlock: {},
  avatarBlock_Img: {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
  },
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

export default function NativeExRedux(props) {
  const c = useStyles()
  /* const [count, setCount] = useState(0)*/
  /*const toPost = (props) => {}*/
  const toQuestion = (props) => {
    console.log(props)
  }
  /*  date_create: "2020-04-28T19:00:00.000Z"
    heading: "yJLbINSzyjAdtGsKd5HA"
    id_user: 134
    questions_text: "Какие есть примеры влияния живописи на осмысление света в кинематографе?"
    user_avatar_url: "https://gravatar.com/avatar/eed3bf7d5f820db6dee44dfdf7e27bd7?s=400&d=robohash&r=x"
    user_name: "9sfjjhXz"
    user_second_name: "CcTxw7Wp"
    user_user_name: "gpiacXEC"
    _id_post: 819*/

  return (
    <div className={c.questionWrapper}>
      <div className={c.lineOneTagsAndData}>
        <div className={c.questionTagsBlock}>TAGS MATH CALCULUS MATHEMATIC</div>
      </div>

      <div className={c.lineTwoAndThreeQuestionTextBlock}>
        <div className={c.avatarLine}>
          <div className={c.avatarBlock}>
            <img
              alt="9sfjjhXz CcTxw7Wp"
              src={props.props.user_avatar_url}
              className={c.avatarBlock_Img}
            />
          </div>
          <div className={c.avatarText}>
            Asked <em className={c.avatarInterPunkt}> &#183; </em>
            <em className={c.avatarInterPunkt}>2h</em>
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
          <div className={c.questionText_Text}>
            {props.props.questions_text}
            <em className={c.questionText_More}>more</em>
          </div>
        </div>
      </div>

      <div className={c.lineFourLikeAndAvatarAndName}>
        <div className={c.likeBlock}>
          <div className={c.likeBlock_LikeIcon}>
            <svg
              width="20"
              height="20"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M28.9525 12.12C28.531 11.614 28.0035 11.2067 27.4074 10.9267C26.8112 10.6468 26.1608 10.5012 25.5022 10.5H18.6616L19.5017 8.35505C19.8511 7.41587 19.9675 6.40596 19.8408 5.41194C19.7141 4.41791 19.3482 3.46945 18.7744 2.6479C18.2006 1.82636 17.4361 1.15626 16.5463 0.69508C15.6566 0.233901 14.6683 -0.00458913 13.6662 6.68867e-05C13.3776 0.000668928 13.0954 0.0844796 12.8532 0.24145C12.6111 0.398421 12.4194 0.62189 12.3011 0.885065L8.0257 10.5H4.50039C3.30681 10.5 2.16212 10.9741 1.31813 11.8181C0.474147 12.662 0 13.8066 0 15V25.5C0 26.6935 0.474147 27.8381 1.31813 28.682C2.16212 29.5259 3.30681 30 4.50039 30H23.5971C24.6499 29.9996 25.6692 29.6302 26.4778 28.956C27.2863 28.2818 27.8329 27.3455 28.0224 26.31L29.9276 15.81C30.0454 15.1611 30.0192 14.4942 29.8507 13.8565C29.6822 13.2189 29.3756 12.6261 28.9525 12.12ZM7.50065 27H4.50039C4.10253 27 3.72097 26.842 3.43964 26.5607C3.15831 26.2794 3.00026 25.8978 3.00026 25.5V15C3.00026 14.6022 3.15831 14.2207 3.43964 13.9394C3.72097 13.6581 4.10253 13.5 4.50039 13.5H7.50065V27ZM27.0023 15.27L25.0972 25.77C25.0333 26.1194 24.8474 26.4349 24.5727 26.6601C24.298 26.8854 23.9523 27.0058 23.5971 27H10.5009V12.315L14.5813 3.13506C15.0013 3.2575 15.3913 3.46567 15.7269 3.74643C16.0624 4.0272 16.336 4.37446 16.5305 4.7663C16.7251 5.15813 16.8362 5.58604 16.857 6.023C16.8779 6.45997 16.8079 6.8965 16.6514 7.30505L15.8564 9.45005C15.687 9.90343 15.6298 10.3911 15.6897 10.8713C15.7496 11.3516 15.9248 11.8103 16.2004 12.2081C16.476 12.606 16.8438 12.9313 17.2724 13.1563C17.7009 13.3813 18.1776 13.4992 18.6616 13.5H25.5022C25.7226 13.4997 25.9404 13.5479 26.14 13.6412C26.3396 13.7345 26.5163 13.8707 26.6573 14.04C26.8018 14.207 26.9077 14.4039 26.9673 14.6165C27.027 14.8291 27.0389 15.0523 27.0023 15.27Z"
                fill="#787676"
              />
            </svg>
          </div>
          <div className={c.likeCount}>42</div>
        </div>
        <button
          className={c.addCommentBlock}
          /*          onClick={() => {
                      let curState
                      if (count) {
                        curState = false
                      } else {
                        curState = true
                      }
                      SetCount(curState)
                    }}*/
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
          <div className={c.addCommentLabel}>Ответить</div>
        </button>
      </div>
    </div>
  )
}
