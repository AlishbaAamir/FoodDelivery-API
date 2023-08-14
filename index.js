
const express = require('express')
const app = express()
require('dotenv').config()
const port = process.env.SERVER_PORT || 9000
const cors = require('cors');

app.use(express.json())
app.use (cors({
  origin: [' http://localhost:5173/'],
  credentials : true,
}));

 app.use('/api', require('./api/User/Router'))
 app.use('/api', require('./api/Category/Router'))
 app.use('/api', require('./api/Restuarent/Router'))
 app.use('/api', require('./api/Items/Router'))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})