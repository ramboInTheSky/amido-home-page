import React from 'react'
import Loader from 'react-loader-spinner'
import ResultItem from '../../components/ResultItem'
import theme, { remToNumber } from '../../theme'
import { List, SearchResultsComponent } from './components'

type SearchResultsProps = {
  results: []
  filters: {
    comments: boolean
    pages: boolean
    attachments: boolean
  }
  loading: boolean
}

const SearchResults = ({ results, filters, loading }: SearchResultsProps) => {
  const data = results.filter((item: any) => {
    switch (item.content?.type) {
      case 'page':
        return filters.pages
      case 'attachment':
        return filters.attachments
      case 'comment':
        return filters.comments
      default:
        return true // in case there are or will be other types non encompassed here
    }
  })
  return (
    <SearchResultsComponent
      duration={300}
      height={loading ? 42 : data.length ? remToNumber(theme.searchBoxHeight) : 0}
    >
      {loading && (
        <div style={{ width: '100%', textAlign: 'center' }}>
          <Loader
            type="ThreeDots"
            color={theme.darkestColor}
            height={30}
            width={30}
          />
        </div>
      )}
      <List>
        {data.length !== 0 &&
          data.map((item: any) => (
            <li key={item.content?.id ?? item.id}>
              <ResultItem data={item} />{' '}
            </li>
          ))}
      </List>
    </SearchResultsComponent>
  )
}

export default SearchResults
