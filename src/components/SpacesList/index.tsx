import React from 'react'
import { SpaceLink, SpacesContainer } from './components'

type SpacesListProps = {
  results: any[]
  colspan?: number
}

const SpacesList = ({ results, colspan = 2 }: SpacesListProps) => {
  return (
    <SpacesContainer>
      {results.map((item: any) => (
        <SpaceLink
          columns={colspan}
          key={item.id}
          href={`https://amidodevelopment.atlassian.net/wiki${item._links?.webui}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          {item.name}
        </SpaceLink>
      ))}
    </SpacesContainer>
  )
}

export default SpacesList
