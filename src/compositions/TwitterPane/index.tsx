/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react'
import { Box } from '../../components/Styled'

type TwitterPaneProps = {}

const setDeferredIframeStyle = () => {
  const element = document.querySelector('#twitter-widget-0') as any
  const header = element?.contentDocument.querySelector('.timeline-InformationCircle-widgetParent')
  element?.contentDocument.querySelector('.timeline-InformationCircle')?.remove()
  const headerStyle = header?.style
  headerStyle?.setProperty('display', 'flex')
  headerStyle?.setProperty('justify-content', 'center')
  headerStyle?.setProperty('height', '2.3rem')
  headerStyle?.setProperty('padding-top', '1.2rem')
  element?.contentDocument.getElementsByTagName('footer')[0]?.remove()
  const parent = document.querySelector('.twitter-parent-box') as any
  parent?.style?.setProperty('display', 'block')
}

const TwitterPane = (props: TwitterPaneProps) => {
  setTimeout(setDeferredIframeStyle, 1500)
  return (
    <Box className="twitter-parent-box" style={{ display: 'none' }}>
      <a
        className="twitter-timeline"
        data-height="700"
        href="https://twitter.com/WeAreAmido?ref_src=twsrc%5Etfw"
      />
    </Box>
  )
}

export default TwitterPane
