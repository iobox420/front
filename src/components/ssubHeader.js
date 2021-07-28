import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import CardActionArea from '@material-ui/core/CardActionArea'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import { NavLink } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  mainRoot: {
    display: 'grid',
    gridGap: '10px',
    gridTemplateAreas: '"ar1 ar2 ar3 ar4 ar5"',
  },
  root: {
    borderRadius: '0px',
    margin: '10px 0px 10px 0px',
    boxShadow:
      '4px 4px 10px -1px rgb(0 0 0 / 20%), -7px 4px 9px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)',
  },
  card: {
    background: 'white',
    padding: '0px 16px 0px 16px',
  },
  Link: {
    textDecoration: 'none',
    color: 'black',
  },
  activeLink: {
    textDecoration: 'none',
    color: '#3f51b5',
  },
}))

export default function SubHeader() {
  const c = useStyles()

  return (
    <div className={c.mainRoot}>
      <Card className={c.root}>
        <CardActionArea className={c.card}>
          <CardContent className={c.replyTopBlock}>
            <Typography className={c.question} variant="h6" component="h2">
              <NavLink
                to="/all"
                activeClassName={c.activeLink}
                className={c.Link}
              >
                Все подряд
              </NavLink>
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <Card className={c.root}>
        <CardActionArea className={c.card}>
          <CardContent className={c.replyTopBlock}>
            <Typography className={c.question} variant="h6" component="h2">
              <NavLink
                to="bestofday"
                activeClassName={c.activeLink}
                className={c.Link}
              >
                Лучшие за сутки
              </NavLink>
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <Card className={c.root}>
        <CardActionArea className={c.card}>
          <CardContent className={c.replyTopBlock}>
            <Typography className={c.question} variant="h6" component="h2">
              <NavLink
                to="bestofweek"
                activeClassName={c.activeLink}
                className={c.Link}
              >
                Неделю
              </NavLink>
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <Card className={c.root}>
        <CardActionArea className={c.card}>
          <CardContent className={c.replyTopBlock}>
            <Typography className={c.question} variant="h6" component="h2">
              <NavLink
                to="bestofmonth"
                activeClassName={c.activeLink}
                className={c.Link}
              >
                Месяц
              </NavLink>
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <Card className={c.root}>
        <CardActionArea className={c.card}>
          <CardContent className={c.replyTopBlock}>
            <Typography className={c.question} variant="h6" component="h2">
              <NavLink
                to="bestofyear"
                activeClassName={c.activeLink}
                className={c.Link}
              >
                Год
              </NavLink>
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  )
}
