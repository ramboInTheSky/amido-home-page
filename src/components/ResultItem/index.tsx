import AttachFileOutlinedIcon from '@material-ui/icons/AttachFileOutlined'
import DescriptionOutlinedIcon from '@material-ui/icons/DescriptionOutlined'
import FolderOpenOutlinedIcon from '@material-ui/icons/FolderOpenOutlined'
import React from 'react'
import { HeadingLine, SubHeadingLine } from './components'

type ResultItemProps = {
  data: any
}

const Icon = (props: any) => {
  switch (props.type) {
    case 'attachment':
      return <AttachFileOutlinedIcon />
    case 'page':
      return <DescriptionOutlinedIcon />
    default:
      return <FolderOpenOutlinedIcon />
  }
}

const ResultItem = ({ data }: ResultItemProps) => {
  return (
    <>
      <HeadingLine>
        <a
          href={`https://amidodevelopment.atlassian.net/wiki${data.content._links.webui}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon type={data.content.type} />
          {data.content.title}
        </a>
        {data.resultGlobalContainer?.displayUrl && (
          <>
            <SubHeadingLine>
              <Icon />
              <a
                href={`https://amidodevelopment.atlassian.net/wiki${data.resultGlobalContainer.displayUrl}`}
              >
                {data.resultGlobalContainer.title}
              </a>
            </SubHeadingLine>
            <SubHeadingLine style={{ marginLeft: '1rem' }}>
              {' '}
              Last updated: {new Date(data.lastModified).toDateString()}
            </SubHeadingLine>
          </>
        )}
      </HeadingLine>

      <p>{data.excerpt}</p>
    </>
  )
}

export default ResultItem
