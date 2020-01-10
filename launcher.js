/* eslint-disable import/no-extraneous-dependencies */
const path = require('path')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const express = require('express')
const morgan = require('morgan')
const axios = require('axios')

const https = require('https')
const fs = require('fs')

const app = express()
const helmet = require('helmet')

const port = 8080
const logger = morgan('dev')
const isDeveloping = process.env.NODE_ENV && process.env.NODE_ENV === 'development'

const AuthStr = 'Basic YWxlc3Npby5maW1vZ25hcmlAYW1pZG8uY29tOmZjMVBFc05CTndJRUc3MnlmRlJHMjU0Ng=='

const parseResponse = (req, res) => {
  if (!isDeveloping) {
    res.sendFile(path.resolve(__dirname, 'build/index.html'))
    return
  }

  res.setHeader('Content-Type', 'text/html; charset=UTF-8')
  fs.createReadStream(path.resolve(__dirname, 'build/index.html')).pipe(res)
}

app.use(
  helmet({
    frameguard: false,
  })
)
app.disable('x-powered-by')
app.use(helmet.xssFilter())
app.use(helmet.noSniff())

app.use(logger)
app.use(cookieParser())

app.use(bodyParser.json())
app.use((error, req, res, next) => {
  if (error.message === 'Unexpected token -') {
    res.status(400).send({ error: 'Bad Request' })
  } else {
    next()
  }
})

process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'

app.get('/user', (req, res) => res.send(req.user))
app.get('/', parseResponse)

if (isDeveloping) {
  const options = {
    key: fs.readFileSync('./keys/server.key'),
    cert: fs.readFileSync('./keys/server.cert'),
  }
  app.use(express.static('./build'))
  https.createServer(options, app).listen(3000)
} else {
  app.use(express.static(path.resolve(__dirname, './build')))
}

app.get('/allspaces', (req, res) => {
  axios
    .get('https://amidodevelopment.atlassian.net/wiki/rest/api/space', {
      headers: {
        Authorization: AuthStr,
        'X-Atlassian-Token': 'no-check',
      },
    })
    .then(response => {
      res.send(response.data)
    })
    .catch(error => {
      console.log(error)
    })
})

app.listen(port)
