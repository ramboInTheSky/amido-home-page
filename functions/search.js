const axios = require('axios')

exports.handler = async event => {
  const confluenceAuthStr =
    'Basic YWxlc3Npby5maW1vZ25hcmlAYW1pZG8uY29tOmZjMVBFc05CTndJRUc3MnlmRlJHMjU0Ng=='
  const searchTerm = event.queryStringParameters.term
  axios
    .get(`https://amidodevelopment.atlassian.net/wiki/rest/api/search?cql=text~${searchTerm}`, {
      headers: {
        Authorization: confluenceAuthStr,
        'X-Atlassian-Token': 'no-check',
      },
    })
    .then(response => {
      return {
          status: 200,
          body: response.data,
      }
    })
    .catch(error => {
      console.log(error)
    })
}
