// import { motion } from 'framer-motion'
import React, { useState } from 'react'
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
  const defaultValue: {
    results: [],
    filters: any
  } = {
    results: [],
    filters: {
      comments: true,
      attachments: true,
      pages: true,
    },
  }
  const [state, setState] = useState(defaultValue)

  const callback = (results: [], filters: any) => {
    setState({ results, filters })
  }
  //   const collapsed = results.length === 0
  return (
    <Box>
      <Search callback={callback} />

      {/* <motion.div
      style={{maxHeight: '300px'}}
        initial={'collapsed'}
        animate={collapsed ? 'collapsed' : 'expanded'}
        variants={ContentVariants}
      > */}
      <SearchResults results={state.results} filters={state.filters} />
      {/* </motion.div> */}
    </Box>
  )
}

export default SearchPane
