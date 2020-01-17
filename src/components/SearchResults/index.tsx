import React from 'react'
import theme, { remToNumber } from '../../theme'
import ResultItem from '../ResultItem'
import { List, SearchResultsComponent } from './components'

type SearchResultsProps = {
  results: []
}

const SearchResults = ({ results }: SearchResultsProps) => {
  return (
    <SearchResultsComponent
      duration={300}
      height={results.length * remToNumber(theme.resultLineHeight)}
    >
      <List>
        {results.length !== 0 &&
          results.map((item: any) => (
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
