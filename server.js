require('dotenv').config()

const express = require('express')
// const { join } = require('path')
// import sequelize connection
// const { Sequelize } = require('sequelize')

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
// app.use(express.static(join(__dirname, 'public')))

app.use(require('./routes'))

// sync sequelize models to the database, then turn on the server
require('./db')
  .sync()
  .then(() => app.listen(process.env.PORT || 3000))
  .catch(err => console.log(err))
