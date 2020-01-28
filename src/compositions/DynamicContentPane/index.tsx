// import { motion } from 'framer-motion'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import AnimateHeight from 'react-animate-height'
import Loader from 'react-loader-spinner'
import PagesList from '../../components/PagesList'
import { Box } from '../../components/Styled'
import endpoints from '../../constants/apis'
import { Header } from './components'

type DynamicContentPaneProps = {
  label?: string
  title: string
  colspan?: number
}

const DynamicContentPanePane = ({
  label = '',
  title = '',
  colspan = 2,
}: DynamicContentPaneProps) => {
  const defaultValue: [] = []

  const [results, setResults] = useState(defaultValue)

  useEffect(() => {
    async function fetchData() {
      const res: { data: { data: { results: [] } } } = await axios.get(
        `${endpoints.searchByLabel}?label=portal-alessio`
      ) //use label here
      setResults(res.data.data.results)
    }
    fetchData()
    // fetchDataLinkedin()
    return function cleanup() {
      console.log('the DynamicContentPane component has unmounted')
    }
  }, [])

  return (
    <Box>
      <Header>{title}</Header>
      <AnimateHeight
        duration={300}
        height={results.length > 1 ? results.length * 42 : 'auto'}
        delay={50}
      >
        {results.length !== 0 ? (
          <PagesList results={results} colspan={results.length > 1 ? colspan : 1} />
        ) : (
          <Loader type="ThreeDots" color="#00BFFF" height={40} width={40} timeout={3000} />
        )}
      </AnimateHeight>
    </Box>
  )
}

export default DynamicContentPanePane
