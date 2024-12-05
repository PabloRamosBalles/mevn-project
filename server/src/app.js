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

app.post('/register', (req, res) =>{
    res.send({
        message: `Hello ${req.body.email} have fun`
    })
})

app.listen(process.env.PORT || 8081)
