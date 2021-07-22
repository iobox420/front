import React from 'react'
import { Route } from 'react-router-dom'
import { Home } from './Home'
import { Login } from './Login'
import { Secret } from './Secret'
import MainPageContainer from './components/MainPageContainer'
import Test from './components/Test'

const App = (props) => {
  return <MainPageContainer store={props.store} />

  /*    (<div>
      <Route
        path="/main"
        render={() => <MainPageContainer store={props.store} />}
      />
      <Route path="/test" render={() => <Test />} />
      <Route exact path="/" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/secret" component={Secret} />
    </div>
  )*/
}

export default App
