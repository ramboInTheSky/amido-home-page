import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Quote } from './components'

interface IQuote {
  quote: string
  length: string
  author: string
  background: string
}
const DailyQuote = () => {
  const [quote, setState] = useState({} as IQuote)
  useEffect(() => {
    async function fetchData() {
      const res: { data: [any] } = await axios.get(`/quote`)
      console.log(res.data)
      setState(res.data[0])
    }
    fetchData()
    // fetchDataLinkedin()
    return function cleanup() {
      console.log('the DailyQuote component has unmounted')
    }
  }, [])
  return (
    <Quote>
      <span>
        <p style={{ textAlign: 'center' }}>{quote.quote}</p>{' '}
        {/* <p style={{ textAlign: 'right' }}>{quote.author}</p> */}
      </span>
    </Quote>
  )
}

export default DailyQuote
