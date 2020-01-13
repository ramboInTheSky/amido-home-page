import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import ClearIcon from '@material-ui/icons/Clear'
import SearchIcon from '@material-ui/icons/Search'
import axios from 'axios'
import React, { useState } from 'react'

type SearchProps = {
  callback: (data: []) => void
}

const Search = ({ callback }: SearchProps) => {
  const [value, setValue] = useState('')
  const handleSearch = async () => {
    const res: { data: { results: [] } } = await axios.get(`/search?term=${value}`)
    callback(res.data.results)
  }
  const handleKeyPress = (e: any) => {
    if (e.keyCode === 13) {
      handleSearch()
    } else {
      setValue(e.target.value)
    }
  }
  const clearSearch = () => {
      setValue('')
      callback([])
  }
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

export default Search
