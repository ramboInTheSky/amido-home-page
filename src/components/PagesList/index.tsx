import React from 'react'
import { PageLink, PagesContainer } from './components'

type PagesListProps = {
  results: any[]
  colspan?: number
}

const PagesList = ({ results, colspan = 2 }: PagesListProps) => {
  return (
    <PagesContainer>
      {results.map((item: any) => (
        <PageLink
          columns={colspan}
          key={item.content.id}
          href={`https://amidodevelopment.atlassian.net/wiki${item.content._links?.webui}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          {item.title}
        </PageLink>
      ))}
    </PagesContainer>
  )
}

export default PagesList
