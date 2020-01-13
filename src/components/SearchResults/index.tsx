import React from 'react'

type SearchResultsProps = {
  results: []
}

const SearchResults = ({ results }: SearchResultsProps) => {
  return (
    <ul>
      {results.length !== 0 && results.map((item: any) => (
        <li key={item.content.id}>
          <a
            href={`https://amidodevelopment.atlassian.net/wiki${item.content._links.webui}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {item.content.title}
          </a>
        </li>
      ))}
    </ul>
  )
}

export default SearchResults
