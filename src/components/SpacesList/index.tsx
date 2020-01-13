import React from 'react'

type SpacesListProps = {
  results: []
}

const SpacesList = ({ results }: SpacesListProps) => {
  return (
    <ul>
      {results.map((item: any) => (
        <li key={item.id}>
          <a
            href={`https://amidodevelopment.atlassian.net/wiki${item._links.webui}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {item.name}
          </a>
        </li>
      ))}
    </ul>
  )
}

export default SpacesList
