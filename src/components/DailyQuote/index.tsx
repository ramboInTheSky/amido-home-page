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
      const { data }: { data: Quote } = cachedData?.data ?? (await axios.get(apis.quote))
      if (!cachedData) {
        updateCache(apis.quote, data)
      }
      //little funny hack to keep religion-agnostic mood in da house
      const newData = { ...data, quote: data.quote.replace(/ God/g, ' Alessio') }
      // end little hack
      setState(newData)
    }
    fetchData()
    return function cleanup() {
      console.log('the DailyQuote component has unmounted')
    }
  }, [])
  return (
    <>
      {quote?.quote && (
        <AnimatedContainer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 2,
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
