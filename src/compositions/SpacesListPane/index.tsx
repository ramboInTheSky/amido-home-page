// import { motion } from 'framer-motion'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import AnimateHeight from 'react-animate-height'
import Loader from 'react-loader-spinner'
import { Box } from '../../components/SharedStyledComponents'
import SpacesList from '../../components/SpacesList'
import endpoints from '../../constants/apis'

type SpacesListProps = {
  spaceKey?: string
}

const SpacesListPane = ({ spaceKey = '' }: SpacesListProps) => {
  const defaultValue: [] = []

  const [results, setResults] = useState(defaultValue)

  useEffect(() => {
    async function fetchData() {
      const res: { data: { results: [] } } = await axios.get(`${endpoints.allSpaces}`) //use spaceKey here
      setResults(res.data.results)
    }
    // async function fetchDataLinkedin() {
    //   const res: { data: { results: [] } } = await axios.get('/linkedin') //use spaceKey here
    //   console.log('linkedin', res.data.results)
    // }
    fetchData()
    // fetchDataLinkedin()
    return function cleanup() {
      console.log('the SpacesList component has unmounted')
    }
  }, [])

  return (
    <Box>
      <AnimateHeight duration={300} height={results.length ? results.length * 42 : 50} delay={50}>
        {results.length !== 0 ? (
          <SpacesList results={results} />
        ) : (
            <Loader type="ThreeDots" color="#00BFFF" height={40} width={40} timeout={3000} />
        )}
      </AnimateHeight>
    </Box>
  )
}

export default SpacesListPane
