import axios from 'axios'
import React, { useEffect, useState } from 'react'
import apis from '../../constants/apis'
import { getDataFromCache, updateCache } from '../../utils/cache'
import { AnimatedContainer, Quote } from './components'

interface Quote {
  quote: string
  length?: string
  author?: string
  background?: string
}
const DailyQuote = () => {
  const [quote, setState] = useState({
    quote: '',
  } as Quote)
  useEffect(() => {
    async function fetchData() {
      const cachedData = getDataFromCache(apis.quote) // this returns data if it exists and it is not expired
      const { data }: { data: Quote } = cachedData ?? (await axios.get(apis.quote))
      setState(data)
      if (!cachedData) {
        updateCache(apis.quote, data)
      }
    }
    fetchData()
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
