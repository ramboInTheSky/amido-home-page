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

const confluenceAuthStr =
  'Basic YWxlc3Npby5maW1vZ25hcmlAYW1pZG8uY29tOmZjMVBFc05CTndJRUc3MnlmRlJHMjU0Ng=='
const quotesToken = 'Token 19c1db548f6878076281957fa6fa1c668dc0726f'

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

process.env.NODE_TLS_REJECT_UNAUTHORIZED = '1'

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

// const getLinkedinAccessToken = async function() {
//   try {
//     const { access_token } = await axios.post(
//       `https://www.linkedin.com/oauth/v2/accessToken?grant_type=client_credentials&client_id=${linkedingClientID}&client_secret=${linkedinClientSecret}`
//     )
//     const redUri = encodeURIComponent('https://localhost:3000')
//     // const res= await axios.post(
//     //   `https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=${linkedingClientID}&redirect_uri=${redUri}&state=1234567890`
//     // )

//     console.log('linkedin access token', access_token)
//     return access_token
//   } catch (e) {
//     console.log('porca troia', e.response.data)
//   }
// }

app.get('/allspaces', (req, res) => {
  axios
    .get('https://amidodevelopment.atlassian.net/wiki/rest/api/space', {
      headers: {
        Authorization: confluenceAuthStr,
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

app.get('/quote', (req, res) => {
  axios
    .get('https://api.paperquotes.com/apiv1/qod/?lang=en', {
      headers: {
        Authorization: quotesToken,
        'Content-Type': 'application/json'
      },
    })
    .then(response => {
      res.send(response.data)
    })
    .catch(error => {
      console.log(error)
    })
})

app.get('/search', (req, res) => {
  const searchTerm = req.query.term
  axios
    .get(`https://amidodevelopment.atlassian.net/wiki/rest/api/search?cql=text~${searchTerm}`, {
      headers: {
        Authorization: confluenceAuthStr,
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

app.get('/searchbylabel', (req, res) => {
  const label = req.query.label
  axios
    .get(`https://amidodevelopment.atlassian.net/wiki/rest/api/search?cql=label="${label}"`, {
      headers: {
        Authorization: confluenceAuthStr,
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

// app.get('/linkedin', async (req, res) => {
//   const token = await getLinkedinAccessToken()
//   axios
//     .get(`https://api.linkedin.com/v2/me`, {
//       headers: {
//         Authorization: `Bearer ${token}`,
//         'Content-Type': 'application/x-www-form-urlencoded'
//       },
//     })
//     .then(response => {
//       res.send(response.data)
//     })
//     .catch(error => {
//       console.log(error.response.data)
//     })
// })

app.listen(port)
