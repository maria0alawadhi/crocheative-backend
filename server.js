const express = require('express')
const logger = require('morgan')
const cors = require('cors')


const AuthRouter = require('./routes/auth')
const itemsRouter = require('./routes/items')
const ordersRouter = require('./routes/orders')
const reviewsRouter = require('./routes/reviews')

const PORT = process.env.PORT || 3001

const db = require('./db')

const app = express()

app.use(cors())
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/auth', AuthRouter)
app.use('/', itemsRouter)
app.use('/', ordersRouter)
app.use('/', reviewsRouter)

app.use('/', (req, res) => {
  res.send(`Connected to Crocheative!`)
})

app.listen(PORT, () => {
  console.log(`Running Express server on Port ${PORT} . . .`)
})
