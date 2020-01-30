const axios = require('axios')

exports.handler = async (event, context, callback) => {
  const headers = {
    'Access-Control-Allow-Origin': 'https://amido.netlify.com',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'GET',
  }
  const confluenceAuthStr =
    'Basic YWxlc3Npby5maW1vZ25hcmlAYW1pZG8uY29tOmZjMVBFc05CTndJRUc3MnlmRlJHMjU0Ng=='
  const searchTerm = event.queryStringParameters.term
  console.log('event -> ', event)
  const res = await axios.get(
    `https://amidodevelopment.atlassian.net/wiki/rest/api/search?cql=text~"${searchTerm}"*`,
    {
      headers: {
        Authorization: confluenceAuthStr,
        'X-Atlassian-Token': 'no-check',
      },
    }
  )
  callback(null, {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json',
      ...headers,
    },
    body: JSON.stringify(res.data),
  })
}
