const axios = require('axios')

exports.handler = async (event, context, callback) => {
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
        callback(null, {
            statusCode: 200,
            body: JSON.stringify({
              status: 'SUCCESS',
              message: '',
              data: response.data
            }),
          });
    })
    .catch(error => {
      console.log(error)
    })
}
