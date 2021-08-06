import React from 'react'
import MainPageContainer from './components/MainPageContainer'

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
