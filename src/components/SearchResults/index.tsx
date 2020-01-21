import React from 'react'
import theme, { remToNumber } from '../../theme'
import ResultItem from '../ResultItem'
import { List, SearchResultsComponent } from './components'

type SearchResultsProps = {
  results: []
  filters: {
    comments: boolean
    pages: boolean
    attachments: boolean
  }
}

const SearchResults = ({ results, filters }: SearchResultsProps) => {
  const data = results.filter((item: any) => {
    switch (item.content.type) {
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
      height={data.length ? remToNumber(theme.searchBoxHeight) : 0}
    >
      <List>
        {data.length !== 0 &&
          data.map((item: any) => (
            <li key={item.content.id}>
              {item.id}
              <ResultItem data={item} />{' '}
            </li>
          ))}
      </List>
    </SearchResultsComponent>
  )
}

export default SearchResults
