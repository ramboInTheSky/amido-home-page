const axios = require('axios')
const REFERER = 'https://amido.netlify.com/'

exports.handler = async (event, context, callback) => {
  if (event.headers.referer === REFERER) {
    const confluenceAuthStr =
      'Basic YW1pZG8taW50ZXJuYWwtcG9ydGFsQGFtaWRvLmNvbTpjRW5qTFU0ODFTNWd4WWYwVmRsWkVDMDk='
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
  } else {
    callback(null, { statusCode: 401 })
  }
}

// amido-internal-portal@amido.com
// cEnjLU481S5gxYf0VdlZEC09
// YW1pZG8taW50ZXJuYWwtcG9ydGFsQGFtaWRvLmNvbTpjRW5qTFU0ODFTNWd4WWYwVmRsWkVDMDk==