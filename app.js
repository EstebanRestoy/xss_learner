
const express = require('express')
const app = express()
const port = 8888
var path = require('path');

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname+'/index.html'))
  })
app.get('/slides', (req, res) => {
  res.sendFile(path.join(__dirname+'/slides/index.html'))
})

app.use(express.static(path.join(__dirname, '/slides/')));


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})