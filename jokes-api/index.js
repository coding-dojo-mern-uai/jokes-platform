const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const routes = require('./routes')

// Iniciar express
const app = express()
const port = 8001
const mongoUrl = 'mongodb+srv://condingdojo:codingdojo@cluster0.pnqka.mongodb.net/jokes?retryWrites=true&w=majority'

// Conectar a la base de datos
mongoose.connect(mongoUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
})

// Refleja el error de conexion base de datos
mongoose.connection.on('error', (err) => {
  console.log('err on db connection', err)
})
// Despega mensaje conexion exitosa
mongoose.connection.on('connected', (err, res) => {
  console.log('mongoose is connected')
})

// Middlewares
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/api', routes)

app.listen(port, () => console.log(`Listening on port: ${port}`))
