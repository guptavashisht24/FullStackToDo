//Create a simple Node Server

const express = require('express')
const app = express()
const port = 5000

app.get('/', (req, res) => {
  res.send({success : true})
})

app.listen(port, () => {
  console.log(`ToDo app listening at http://localhost:${port}`)
})