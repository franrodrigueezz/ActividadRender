const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.sendFile(__dirname, 'Index.html')
})

app.listen(3000)