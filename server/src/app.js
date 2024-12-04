console.log('hellooo woooorld');
const express = require('express')
const bodyParser = require('body-parser') 
const cors = require('cors') //headers
const morgan = require('morgan') //logger

const app = express()
app.use(morgan('combine'))
app.use(bodyParser.json())
app.use(cors())

app.get('/status', (req, res) => {
    res.send({
        message: 'Hello World!'
    })
})

app.listen(process.env.PORT || 8081)
