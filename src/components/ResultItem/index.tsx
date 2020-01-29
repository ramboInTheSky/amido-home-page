import { Grid } from '@material-ui/core'
import AttachFileOutlinedIcon from '@material-ui/icons/AttachFileOutlined'
import DescriptionOutlinedIcon from '@material-ui/icons/DescriptionOutlined'
import FolderOpenOutlinedIcon from '@material-ui/icons/FolderOpenOutlined'
import FormatAlignLeftOutlinedIcon from '@material-ui/icons/FormatAlignLeftOutlined'
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
    case 'content':
      return <FormatAlignLeftOutlinedIcon />
    default:
      return <FolderOpenOutlinedIcon />
  }
}

const ResultItem = ({ data }: ResultItemProps) => {
  return (
    <>
      <HeadingLine>
        <Grid container spacing={0} alignItems="center">
          <Grid item>
            <Icon type={data.content?.type ?? data.entityType} />
          </Grid>
          <Grid item>
            <Line
              href={`https://amidodevelopment.atlassian.net/wiki${data.content?._links.webui ??
                data.url}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {data.content?.title ?? data.title}
            </Line>
          </Grid>
        </Grid>
        {data.resultGlobalContainer?.displayUrl && (
          <>
            <Grid container spacing={0} alignItems="center">
              <SubHeadingLine>
                <Grid item>
                  <Icon />
                </Grid>
                <Grid item>
                  <Line
                    href={`https://amidodevelopment.atlassian.net/wiki${data.resultGlobalContainer.displayUrl}`}
                  >
                    {data.resultGlobalContainer.title}
                  </Line>
                </Grid>
                <Grid item>
                  <div style={{ marginLeft: '0.5rem' }}>
                    Last updated: {new Date(data.lastModified).toDateString()}
                  </div>
                </Grid>
              </SubHeadingLine>
            </Grid>
          </>
        )}
      </HeadingLine>

      <p>{data.excerpt}</p>
    </>
  )
}

export default ResultItem
