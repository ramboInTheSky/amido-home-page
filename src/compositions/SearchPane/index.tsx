// import { motion } from 'framer-motion'
import React, { useState } from 'react'
import AnimateHeight from 'react-animate-height'
import Search from '../../components/Search'
import SearchResults from '../../components/SearchResults'
import { Box } from '../../components/SharedStyledComponents'

type SearchPaneProps = {}

// export const ContentVariants = {
//   expanded: () => ({
//     height: 'auto',
//     transition: {
//       when: 'afterChildren',
//       duration: 0.3,
//       ease: "easeInOut",
//     },
//   }),
//   collapsed: () => ({
//     height: '1px',
//     transition: {
//       when: 'afterChildren',
//       duration: 0.5,
//       ease: "easeInOut",
//     },
//   }),
// }

const SearchPane = (props: SearchPaneProps) => {
  const defaultValue: [] = []
  const [results, setResults] = useState(defaultValue)
//   const collapsed = results.length === 0
  return (
    <Box>
      <Search callback={setResults} />
      <AnimateHeight duration={300} height={results.length * 20}>
      {/* <motion.div
      style={{maxHeight: '300px'}}
        initial={'collapsed'}
        animate={collapsed ? 'collapsed' : 'expanded'}
        variants={ContentVariants}
      > */}
        <SearchResults results={results} />
      {/* </motion.div> */}
      </AnimateHeight>
    </Box>
  )
}

export default SearchPane
