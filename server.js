console.log("server started")

const express = require('express')
const app = express()

var server = app.listen(3000, listening)

function listening() {
    console.log(listening)
}

app.use(express.static('website'))