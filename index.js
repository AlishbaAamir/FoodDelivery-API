const express = require('express')
const cors = require('cors')
const app = express()
require('dotenv').config()
const port = process.env.SERVER_PORT || 9000

app.use(cors())
app.use(express.json())


 app.use('/api', require('./api/User/Router'))
 app.use('/api', require('./api/Category/Router'))
 app.use('/api', require('./api/Restuarent/Router'))
 app.use('/api', require('./api/Items/Router'))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})