// import { motion } from 'framer-motion'
import React, { useState } from 'react'
import AnimateHeight from 'react-animate-height'
import Loader from 'react-loader-spinner'
import SpacesList from '../../components/SpacesList'
import { Box } from '../../components/Styled'
import { Header } from './components'

type ContentPaneProps = {
  spaceKey: string
  results: any[]
  colspan?: number
}

const ContentPane = ({ spaceKey = '', results = [], colspan = 2 }: ContentPaneProps) => {
  const [size, setSize] = useState(0)
  setTimeout(() => {
    setSize(results.length)
  }, 50)
  return (
    <Box>
      <Header>{spaceKey}</Header>
      <AnimateHeight duration={300} height={(size / colspan * 3) * 27} delay={50}>
        {results.length !== 0 ? (
          <SpacesList results={results} colspan={colspan} />
        ) : (
          <Loader type="ThreeDots" color="#00BFFF" height={40} width={40} timeout={3000} />
        )}
      </AnimateHeight>
    </Box>
  )
}

export default ContentPane
