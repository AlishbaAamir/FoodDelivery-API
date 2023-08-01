
const express = require('express')
const app = express()
require('dotenv').config()
const port = process.env.SERVER_PORT || 9000

app.use(express.json())

 app.use('/api', require('./api/Category/Router'))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})