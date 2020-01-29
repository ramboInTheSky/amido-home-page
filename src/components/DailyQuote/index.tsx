import axios from 'axios'
import React, { useEffect, useState } from 'react'
import apis from '../../constants/apis'
import { AnimatedContainer, Quote } from './components'

interface IQuote {
  quote: string
  length?: string
  author?: string
  background?: string
}
const DailyQuote = () => {
  const [quote, setState] = useState({
    quote: ''
  } as IQuote)
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
    <>
      {quote.quote && (
        <AnimatedContainer
          initial={{ scale: 0 }}
          animate={{ rotate: 360, scale: 1 }}
          transition={{
            type: 'spring',
            stiffness: 190,
            damping: 20,
          }}
        >
          <Quote>
            <p>{quote.quote}</p> <p>{quote.author}</p>{' '}
          </Quote>
        </AnimatedContainer>
      )}
    </>
  )
}

export default DailyQuote
