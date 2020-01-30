import FormControlLabel from '@material-ui/core/FormControlLabel'
import Grid from '@material-ui/core/Grid'
import Switch from '@material-ui/core/Switch'
import ClearIcon from '@material-ui/icons/Clear'
import SearchIcon from '@material-ui/icons/Search'
import axios from 'axios'
import React, { useState } from 'react'
import endpoints from '../../constants/apis'
import { SearchContainer, InputField, SearchGrid, ToggleGroup } from './components'

const CancelToken = axios.CancelToken
let source = CancelToken.source()

type SearchProps = {
  callback: (
    data: [],
    filters: {
      comments: boolean
      pages: boolean
      attachments: boolean
    }
  ) => void
  setLoading: (i: boolean) => void
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
    try {
      source.cancel('Operation canceled by the user on a new search')
      source = CancelToken.source()
      setLoading(true)
      const {
        data: { results },
      }: { data: { results: [] } } = await axios.get(`${endpoints.search}?term=${value}`, {
        cancelToken: source.token,
      })
      setLoading(false)
      callback(results, state)
    } catch (thrown) {
      if (axios.isCancel(thrown)) {
        console.log('Request canceled', thrown.message)
      } else {
        // handle error
      }
    }
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
    setLoading(false)
    source.cancel('Operation canceled by the user.')
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
