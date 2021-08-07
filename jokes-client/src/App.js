import { Switch, Route } from 'react-router-dom'

import Jokes from './pages/Jokes'
import Joke from './pages/Joke'
import CreateJoke from './pages/CreateJoke'
import UpdateJoke from './pages/UpdateJoke'
import RandomJoke from './pages/RandomJoke'

import NavBar from './components/NavBar'

/*
  Get one joke // Route
  Update Jokes // Route
  Delete Joke // Button
*/

function App() {
  return (
    <div>
      <NavBar />
      <div style={{ margin: 20 }}>
        <Switch>
          {/* http://localhost:3000 */}
          <Route exact path="/" component={Jokes} />
          {/* http://localhost:3000/jokes/new */}
          <Route exact path="/jokes/new" component={CreateJoke} />
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
