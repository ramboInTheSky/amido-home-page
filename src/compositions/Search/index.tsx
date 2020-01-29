import FormControlLabel from '@material-ui/core/FormControlLabel'
import Grid from '@material-ui/core/Grid'
import Switch from '@material-ui/core/Switch'
import ClearIcon from '@material-ui/icons/Clear'
import SearchIcon from '@material-ui/icons/Search'
import axios from 'axios'
import React, { useState } from 'react'
import endpoints from '../../constants/apis'
import { SearchContainer, InputField, SearchGrid, ToggleGroup } from './components'

type SearchProps = {
  callback: (
    data: [],
    filters: {
      comments: boolean
      pages: boolean
      attachments: boolean
    }
  ) => void,
  setLoading: (i:boolean) => void
}
let results: [] = []
const Search = ({ callback, setLoading }: SearchProps) => {
  const [value, setValue] = useState('')
  // const [loading, setLoading] = useState(false)

  const [state, setState] = React.useState({
    comments: true,
    pages: true,
    attachments: true,
  })
  const handleSearch = async () => {
    setLoading(true)
    const res: { data: { results: [] } } = await axios.get(`${endpoints.search}?term=${value}`)
    results = res.data.results
    setLoading(false)
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
      <Grid container spacing={1} alignItems="flex-end">
        <SearchContainer item>
          <InputField
            fullWidth
            id="input-with-icon-grid"
            label="Search Confluence"
            onKeyUp={handleKeyPress}
            value={value}
            onChange={handleInputChange}
          />
        </SearchContainer>
        <Grid item style={{ cursor: 'pointer' }}>
          {value && <ClearIcon onClick={clearSearch} />}
          <SearchIcon onClick={handleSearch} />
        </Grid>
        
      </Grid>
      <Grid>
        <ToggleGroup row>
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
        </ToggleGroup>
      </Grid>
    </SearchGrid>
  )
}

export default Search
