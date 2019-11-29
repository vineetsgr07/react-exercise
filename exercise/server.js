const express = require('express')
const userList = require('./db.json')
const app = express()
var cors = require('cors')

app.use(cors())

// Create an instance of the http server to handle HTTP requests
app.get('/user', (req, res) => {
    console.log(userList)
    res.setHeader('Content-Type', 'application/json');
    return res.send({ userList })
})

// Start the server on port 3000
app.listen(8080, '127.0.0.1');
console.log('Node server running on port 8080');