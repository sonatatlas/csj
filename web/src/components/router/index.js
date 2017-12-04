import React from 'react'
import {
    BrowserRouter as Router, Route, Redirect, withRouter
} from 'react-router-dom'


const MyRouter = ({Containers})=>(
        <Router>
	<div style={{marginTop:"8vh"}}>
	<AuthButton />
        <Route exact path="/" component={Containers.Home}/>
        <Route path="/intro" component={Containers.Intro}/>
        <Route path="/items" component={Containers.Items}/>	
	</div>
        </Router>
)

const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    this.isAuthenticated = true
    setTimeout(cb, 100) // fake async
  },
  signout(cb) {
    this.isAuthenticated = false
    setTimeout(cb, 100)
  }
}

const AuthButton = withRouter(({ history }) => (
  fakeAuth.isAuthenticated ? (
    <p>
      Welcome! <button onClick={() => {
        fakeAuth.signout(() => history.push('/'))
      }}>Sign out</button>
    </p>
  ) : (
    <p></p>
  )
))

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    fakeAuth.isAuthenticated ? (
      <Component {...props}/>
    ) : (
      <Redirect to={{
        pathname: '/',
        state: { from: props.location }
      }}/>
    )
  )}/>
)

export default MyRouter
