const axios = require('axios')

exports.handler = async (event, context, callback) => {
  const token =
    'Token 19c1db548f6878076281957fa6fa1c668dc0726f'
  const res = await axios.get(
    `https://api.paperquotes.com/apiv1/qod/?lang=en/`,
    {
      headers: {
        Authorization: token,
        'Content-Type': 'application/json',
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
