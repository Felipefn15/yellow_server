
const contacts = require("./data/contacts.json");
const express = require('express')
const cors = require('cors')
const app = express()
const port = 8000
const corsOption = {
    origin: 'https://yellow-page-test.herokuapp.com/',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

app.use(cors(corsOption))

app.get('/', (req, res) => {
  res.send(JSON.stringify(contacts))
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
