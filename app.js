require('dotenv').config()

const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('Hello Word')
})

app.listen(process.env.PORT, () => {
  console.log(process.env.PORT);
}
)