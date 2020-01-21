import AttachFileOutlinedIcon from '@material-ui/icons/AttachFileOutlined'
import DescriptionOutlinedIcon from '@material-ui/icons/DescriptionOutlined'
import FolderOpenOutlinedIcon from '@material-ui/icons/FolderOpenOutlined'
import SpeakerNotesOutlinedIcon from '@material-ui/icons/SpeakerNotesOutlined'
import React from 'react'
import { HeadingLine, Line, SubHeadingLine } from './components'

type ResultItemProps = {
  data: any
}

const Icon = (props: any) => {
  switch (props.type) {
    case 'attachment':
      return <AttachFileOutlinedIcon />
    case 'page':
      return <DescriptionOutlinedIcon />
    case 'comment':
      return <SpeakerNotesOutlinedIcon />
    default:
      return <FolderOpenOutlinedIcon />
  }
}

const ResultItem = ({ data }: ResultItemProps) => {
  return (
    <>
      <HeadingLine>
        <Line
          href={`https://amidodevelopment.atlassian.net/wiki${data.content._links.webui}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon type={data.content.type} />
          {data.content.title}
        </Line>
        {data.resultGlobalContainer?.displayUrl && (
          <>
            <SubHeadingLine>
              <Icon />
              <Line
                href={`https://amidodevelopment.atlassian.net/wiki${data.resultGlobalContainer.displayUrl}`}
              >
                {data.resultGlobalContainer.title}
              </Line>
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
