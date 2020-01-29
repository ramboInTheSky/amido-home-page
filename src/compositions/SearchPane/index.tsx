// import { motion } from 'framer-motion'
import React, { useState } from 'react'
import { Box } from '../../components/Styled'
import Search from '../Search'
import SearchResults from '../SearchResults'

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
  const [loading, setLoading] = useState(false)

  const callback = (results: [], filters: any) => {
    setState({ results, filters })
  }
  //   const collapsed = results.length === 0
  return (
    <Box style={{minWidth: '900px'}}>
      <Search callback={callback} setLoading={setLoading}/>

      {/* <motion.div
      style={{maxHeight: '300px'}}
        initial={'collapsed'}
        animate={collapsed ? 'collapsed' : 'expanded'}
        variants={ContentVariants}
      > */}
      <SearchResults results={state.results} filters={state.filters} loading={loading}/>
      {/* </motion.div> */}
    </Box>
  )
}

export default SearchPane
