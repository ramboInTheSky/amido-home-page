import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Quote } from './components'
// import { motion } from 'framer-motion'

interface IQuote {
  quote: string
  length?: string
  author?: string
  background?: string
}
const DailyQuote = () => {
  const [quote, setState] = useState({quote: ''} as IQuote)
  useEffect(() => {
    async function fetchData() {
      const res: { data: IQuote } = await axios.get(`/quote`)
      console.log(res.data)
      setState(res.data)
    }
    fetchData()
    // fetchDataLinkedin()
    return function cleanup() {
      console.log('the DailyQuote component has unmounted')
    }
  }, [])
  return (
    <Quote>
        <p style={{ textAlign: 'center' }}>{quote.quote}</p>{' '}
        <p style={{ textAlign: 'right' }}>{quote.author}</p>{' '}
    </Quote>
  )
}

export default DailyQuote
