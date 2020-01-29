import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Quote } from './components'
import apis from '../../constants/apis'
// import { motion } from 'framer-motion'

interface IQuote {
  quote: string
  length?: string
  author?: string
  background?: string
}
const DailyQuote = () => {
  const [quote, setState] = useState({ quote: '' } as IQuote)
  useEffect(() => {
    async function fetchData() {
      const res: { data: IQuote } = await axios.get(apis.quote)
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
      <p>{quote.quote}</p> <p>{quote.author}</p>{' '}
    </Quote>
  )
}

export default DailyQuote
