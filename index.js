require("dotenv").config();
const express = require('express')


const app = express()

const PORT = 4000

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/name', (req, res) => {
    res.send('Rishabh Kumar')
})

app.get('/login', (req, res) => {
    res.send('<h1>Please login...</h1>')
})

app.get('/youtube', (req, res) => {
    res.send('<h2>Welcome on Youtube...</h2>')
})

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${process.env.PORT}`)
})