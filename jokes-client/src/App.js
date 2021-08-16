import { Switch, Route } from 'react-router-dom'

// Joke
import Jokes from './pages/Jokes'
import Joke from './pages/Joke'
import CreateJoke from './pages/CreateJoke'
import UpdateJoke from './pages/UpdateJoke'
import RandomJoke from './pages/RandomJoke'

// Auth
import Login from './pages/Login'
import Register from './pages/Register'

import NavBar from './components/NavBar'
import PrivateRoute from './components/PrivateRoute'

import useAuth from './hooks/useAuth'

/*
  Get one joke // Route
  Update Jokes // Route
  Delete Joke // Button
*/

function App() {
  const { isLoggedIn, logout } = useAuth()
  return (
    <div>
      <NavBar isLoggedIn={isLoggedIn} onClick={() => logout()} />
      <div style={{ margin: 20 }}>
        <Switch>
          {/* http://localhost:3000 */}
          <PrivateRoute isLoggedIn={isLoggedIn} exact path="/" component={Jokes} />
          {/* http://localhost:3000/login */}
          <Route exact path="/login" component={Login} />
          {/* http://localhost:3000/register */}
          <Route exact path="/register" component={Register} />
          {/* http://localhost:3000/jokes/new */}
          <PrivateRoute isLoggedIn={isLoggedIn} exact path="/jokes/new" component={CreateJoke} />
          {/* http://localhost:3000/jokes/random */}
          <Route exact path="/jokes/random" component={RandomJoke} />
          {/* http://localhost:3000/jokes/:_id */}
          <Route exact path="/jokes/:_id" component={Joke} />
          {/* http://localhost:3000/jokes/:_id/edit */}
          <Route exact path="/jokes/:_id/edit" component={UpdateJoke} />
        </Switch>
      </div>
    </div>
  )
}

export default App

// Components = Legos, no procesan información.
// Containers = Regulan la información.

/* 

 <Containers> 

  const apiCall
  const customFunc
  const socketInfo

    <Components apiCall/>
    <Components customFunc/>
    <Components socketInfo/>
 </Containers>

*/
