const express = require('express')

const app = express()

// app.get('/name', (req, res) => {
//   console.log(req.query.n)
//   res.send(`Hello ${req.query.n}!`)
// })

app.get('/name/:n/:x/:y', (req, res) => {
  console.log(req.params)
  res.send(`Hello ${req.params.n}!`)
})

app.listen(3000)
