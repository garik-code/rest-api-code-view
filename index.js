const Script = require('./core.js')
const express = require('express')
const app = express()

app.get('/:url', (req, res) => {

  Script.url(req.params.url.slashReplace())
  .then(script => res.send(script), err => res.send(err))

})

app.listen(3333)
