// import { motion } from 'framer-motion'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import AnimateHeight from 'react-animate-height'
import { Box } from '../../components/SharedStyledComponents'
import SpacesList from '../../components/SpacesList'

type SpacesListProps = {
  spaceKey?: string
}

const SpacesListPane = ({ spaceKey = '' }: SpacesListProps) => {
  const defaultValue: [] = []

  const [results, setResults] = useState(defaultValue)

  useEffect(() => {
    async function fetchData() {
      const res: { data: { results: [] } } = await axios.get('/allspaces')
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
        <SpacesList results={results} />
      </AnimateHeight>
    </Box>
  )
}

export default SpacesListPane
