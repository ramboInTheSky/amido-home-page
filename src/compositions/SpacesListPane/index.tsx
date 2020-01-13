// import { motion } from 'framer-motion'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import AnimateHeight from 'react-animate-height'
import SearchResults from '../../components/SearchResults'
import { Box } from '../../components/SharedStyledComponents'

type SpacesListProps = {
  spaceKey?: string
}

const SpacesList = ({ spaceKey = '' }: SpacesListProps) => {
  const defaultValue: [] = []

  const [results, setResults] = useState(defaultValue)

  useEffect(() => {
    async function fetchData() {
      const res: { data: { results: [] } } = await axios.get('/allspaces.json')
      setResults(res.data.results)
    }
    fetchData()
    return function cleanup() {
      console.log('the SpacesList component has unmounted')
    }
  }, [spaceKey])

  return (
    <Box>
      <AnimateHeight duration={300} height={results.length * 20}>
        <SearchResults results={results} />
      </AnimateHeight>
    </Box>
  )
}

export default SpacesList
