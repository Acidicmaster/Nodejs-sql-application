const express = require('express')

const { sequelize, User, Post } = require('./models')

const app = express()
app.use(express.json())


app.listen({ port: 5000 }, async () => {
  console.log('Server up on http://localhost:5000')
  //await sequelize.authenticate()sync({ force: true })
   sequelize.sync({ force: true })
  console.log('Database Connected!')
})