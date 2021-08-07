import React from 'react'
import TextField from '@material-ui/core/TextField'
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'

const JokeForm = ({ submitHandler, changeHandler, joke = {}, formErrors = {} }) => {
  const inputErrors = Object.keys(formErrors)

  // (condition && value) if(condition) return value
  // (condition || value) if(condition) {return condition} else {return value}
  // condition ? true : false

  console.log(joke)

  return (
    <Paper style={{ padding: 20 }} variant="outlined">
      <form>
        <div style={{ marginBottom: 10 }}>
          <TextField
            fullWidth
            label="Setup"
            name="setup"
            variant="outlined"
            defaultValue={joke.setup}
            onChange={changeHandler}
            error={inputErrors.includes('setup')}
            helperText={inputErrors.includes('setup') && formErrors.setup.message}
          />
        </div>
        <div style={{ marginBottom: 10 }}>
          <TextField
            fullWidth
            label="Punchline"
            name="punchline"
            variant="outlined"
            defaultValue={joke.punchline}
            onChange={changeHandler}
            error={inputErrors.includes('punchline')}
            helperText={inputErrors.includes('punchline') && formErrors.punchline.message}
          />
        </div>
        <Button variant="outlined" color="primary" onClick={submitHandler}>
          Save Joke
        </Button>
      </form>
    </Paper>
  )
}

export default JokeForm
