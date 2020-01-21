import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormGroup from '@material-ui/core/FormGroup'
import Grid from '@material-ui/core/Grid'
import Switch from '@material-ui/core/Switch'
import TextField from '@material-ui/core/TextField'
import ClearIcon from '@material-ui/icons/Clear'
import SearchIcon from '@material-ui/icons/Search'
import axios from 'axios'
import React, { useState } from 'react'
import endpoints from '../../constants/apis'
import { SearchGrid } from './components'

type SearchProps = {
  callback: (
    data: [],
    filters: {
      comments: boolean
      pages: boolean
      attachments: boolean
    }
  ) => void
}
let results: [] = []
const Search = ({ callback }: SearchProps) => {
  const [value, setValue] = useState('')

  const [state, setState] = React.useState({
    comments: true,
    pages: true,
    attachments: true,
  })
  const handleSearch = async () => {
    const res: { data: { results: [] } } = await axios.get(`${endpoints.search}?term=${value}`)
    results = res.data.results
    callback(res.data.results, state)
  }
  const handleKeyPress = (e: any) => {
    if (e.keyCode === 13) {
      handleSearch()
    } else {
      setValue(e.target.value)
    }
    if (e.target.value === '') {
      clearSearch()
    }
  }
  const clearSearch = () => {
    results = []
    setValue('')
    callback(results, state)
  }
  const handleInputChange = (e: any) => setValue(e.target.value)
  const handleSwitchChanges = (name: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
    const newState = { ...state, [name]: event.target.checked }
    setState(newState)
    callback(results, newState)
  }

  return (
    <SearchGrid>
      <div></div>
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
      <Grid>
        <FormGroup row>
          <FormControlLabel
            control={
              <Switch
                checked={state.pages}
                onChange={handleSwitchChanges('pages')}
                value="pages"
                color="primary"
                disabled={!value}
              />
            }
            label="Pages"
          />
          <FormControlLabel
            control={
              <Switch
                checked={state.attachments}
                onChange={handleSwitchChanges('attachments')}
                value="attachments"
                color="primary"
                disabled={!value}
              />
            }
            label="Attachments"
          />
          <FormControlLabel
            control={
              <Switch
                checked={state.comments}
                onChange={handleSwitchChanges('comments')}
                value="comments"
                color="primary"
                disabled={!value}
              />
            }
            label="Comments"
          />
        </FormGroup>
      </Grid>
    </SearchGrid>
  )
}

export default Search
