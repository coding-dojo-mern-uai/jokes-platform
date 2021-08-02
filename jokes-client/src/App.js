import { Switch, Route } from 'react-router-dom'

import Jokes from './Router/Jokes'
import Joke from './Router/Joke'
import CreateJoke from './Router/CreateJoke'
import UpdateJoke from './Router/UpdateJoke'
import RandomJoke from './Router/RandomJoke'

import NavBar from './NavBar'

/*
  Get one joke // Route
  Update Jokes // Route
  Delete Joke // Button
*/

function App() {
  return (
    <div>
      <h1>Jokes App</h1>
      <NavBar />
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
  )
}

export default App
