import React from 'react'

import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import { useHistory } from 'react-router-dom'

const JokeCard = ({ joke, onClickButton, actions }) => {
  const history = useHistory()

  const renderContent = (label, content) => {
    return (
      <CardContent>
        <Typography gutterBottom variant="h5" component="h3">
          {label}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {content}
        </Typography>
      </CardContent>
    )
  }

  const renderActions = () => {
    return (
      <CardActions>
        <Button onClick={() => history.push(`/jokes/${joke._id}/edit`)} size="small" color="primary" variant="outlined">
          Edit Joke
        </Button>
        <Button onClick={onClickButton} size="small" color="secondary" variant="outlined">
          Delete Joke
        </Button>
      </CardActions>
    )
  }

  return (
    <Card style={{ marginBottom: 50 }}>
      <CardActionArea onClick={() => history.push(`/jokes/${joke._id}`)}>
        {renderContent('Setup', joke.setup)}
        {renderContent('Punchline', joke.punchline)}
      </CardActionArea>
      {actions && renderActions()}
    </Card>
  )
}

export default JokeCard
