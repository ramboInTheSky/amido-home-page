import React from 'react'
import theme, { remToNumber } from '../../theme'
import ResultItem from '../ResultItem'
import { SearchResultsComponent } from './components'

type SearchResultsProps = {
  results: []
}

const SearchResults = ({ results }: SearchResultsProps) => {
  return (
    <SearchResultsComponent duration={300} height={results.length * remToNumber(theme.resultLineHeight)}>
      <ul>
        {results.length !== 0 &&
          results.map((item: any) => (
            <li key={item.content.id}>
              {item.id}
              <ResultItem data={item} />{' '}
            </li>
          ))}
      </ul>
    </SearchResultsComponent>
  )
}

export default SearchResults
