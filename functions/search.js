const axios = require('axios')

exports.handler = async (event, context, callback) => {
  const confluenceAuthStr =
    'Basic YWxlc3Npby5maW1vZ25hcmlAYW1pZG8uY29tOmZjMVBFc05CTndJRUc3MnlmRlJHMjU0Ng=='
  const searchTerm = event.queryStringParameters.term
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
    },
    body: JSON.stringify(res.data),
  })
}
