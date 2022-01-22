const express = require('express')


const { sequelize} = require('./models')

const app = express()
app.use(express.json())

//rouets
const authRouter = require("./routes/auth");



app.use("/api/auth", authRouter);

app.listen({ port: 5000 }, async () => {
  console.log('Server up on http://localhost:5000')
  //await sequelize.authenticate()sync({ force: true })
   sequelize.sync({ force: true })
  console.log('Database Connected!')
})