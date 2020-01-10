import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import ClearIcon from '@material-ui/icons/Clear'
import SearchIcon from '@material-ui/icons/Search'
import axios from 'axios'
import React, { useState } from 'react'

const AuthStr = 'Basic YWxlc3Npby5maW1vZ25hcmlAYW1pZG8uY29tOmZjMVBFc05CTndJRUc3MnlmRlJHMjU0Ng=='

type SearchPaneProps = {}

const SearchPane = (props: SearchPaneProps) => {
  const [value, setValue] = useState('')

  const handleSearch = async () => {
    console.log(value)
    const res = await axios.get('https://amidodevelopment.atlassian.net/wiki/rest/api/space')
    console.log(res)
  }
  const handleKeyPress = (e: any) => {
    if (e.keyCode === 13) {
      handleSearch()
    } else {
      setValue(e.target.value)
      console.log(value)
    }
  }
  const clearSearch = () => setValue('')
  const handleInputChange = (e: any) => setValue(e.target.value)

  return (
    <Grid container spacing={1} alignItems="flex-end">
      <Grid item>
        <TextField
          id="input-with-icon-grid"
          label="Search Confluence"
          onKeyUp={handleKeyPress}
          value={value}
          onChange={handleInputChange}
        />
      </Grid>
      <Grid item style={{ cursor: 'pointer' }}>
        {value && <ClearIcon onClick={clearSearch} />}
        <SearchIcon onClick={handleSearch} />
      </Grid>
    </Grid>
  )
}

export default SearchPane
