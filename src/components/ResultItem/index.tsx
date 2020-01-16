import React from 'react'

type ResultItemProps = {
  data: any
}

const ResultItem = ({ data }: ResultItemProps) => {
  return (
    <>
      <h3>
        {data.content.type} within{' '}
        <a
          href={`https://amidodevelopment.atlassian.net/wiki${data.resultGlobalContainer.displayUrl}`}
        >
          {data.resultGlobalContainer.title}
        </a>{' '}
      </h3>
      <a
        href={`https://amidodevelopment.atlassian.net/wiki${data.content._links.webui}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        {data.content.title}
      </a>
      <p>{data.lastModified}</p>
      <p>{data.excerpt}</p>
    </>
  )
}

export default ResultItem
