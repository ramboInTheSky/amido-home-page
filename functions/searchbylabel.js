const axios = require('axios')
const REFERER = 'https://amido.netlify.com/'

exports.handler = async (event, context, callback) => {
  if (event.headers.referer === REFERER) {
    const confluenceAuthStr =
      'Basic YW1pZG8taW50ZXJuYWwtcG9ydGFsQGFtaWRvLmNvbTpjRW5qTFU0ODFTNWd4WWYwVmRsWkVDMDk='
    const label = event.queryStringParameters.label
    const res = await axios.get(
      `https://amidodevelopment.atlassian.net/wiki/rest/api/search?cql=label="${label}"`,
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
  } else {
    callback(null, { statusCode: 401 })
  }
}
