import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import Container from '@material-ui/core/Container'
import Header from './Header'
import SubHeader from './ssubHeader'
import TextApi from './TextApiComponent'
import { BrowserRouter, Route } from 'react-router-dom'
import QuestionSingleApiComponent from './QuestionSingle/QuestionSingleApiComponent'
import QuestionOnTheMainContainer from './QuestionOnMain/QuestionOnThemainContainer'
import QuestionSingleContainer from './QuestionSingle/QuestionSingleContainer'

const MainPage = (props) => {
  function RDM(min = 1, max = 10000) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min)) + min //Максимум не включается, минимум включается
  }
  document.title = RDM(1, 1000)

  return (
    <BrowserRouter>
      <React.Fragment>
        <CssBaseline />
        <Container maxWidth="md">
          <Header
            tokenAC={props.tokenAC}
            auth={props.state.authorization}
            token={props.token}
            clearTokenAC={props.clearTokenAC}
          />
          <SubHeader />
          <div className="app-wrapper-content">
            <Route
              exact
              path="/questions/:genreId"
              render={() => <QuestionSingleContainer props={props} />}
            />
            <Route
              path="/all"
              render={() => (
                <QuestionOnTheMainContainer api={'api/questions/all/'} />
              )}
            />
            <Route
              path="/bestofday"
              render={() => (
                <QuestionOnTheMainContainer api={'api/questions/all/'} />
              )}
            />
            <Route
              path="/bestofweek"
              render={() => (
                <QuestionOnTheMainContainer api={'api/questions/all/'} />
              )}
            />
            <Route
              path="/bestofmonth"
              render={() => (
                <QuestionOnTheMainContainer api={'api/questions/all/'} />
              )}
            />
            <Route
              path="/bestofyear"
              render={() => (
                <QuestionOnTheMainContainer api={'api/questions/all/'} />
              )}
            />
          </div>
        </Container>
      </React.Fragment>
    </BrowserRouter>
  )
}

export default MainPage
