/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react'
import Layout from '../../components/PageLayout'
import UsefulApps from '../../components/UsefulApps'
import SearchPane from '../../compositions/SearchPane'
import SpacesList from '../../compositions/SpacesListPane'
import { Col, HomePageWrapper, Row } from './components'
import { Box } from '../../components/SharedStyledComponents'

type HomePageProps = {}

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

const HomePage = (props: HomePageProps) => {
  setTimeout(setDeferredIframeStyle, 1500)
  return (
    <Layout>
      <HomePageWrapper className="mainContainer">
        <Col className="leftCol">
          <Row>
            <SearchPane />
          </Row>
          <Row>
            <SpacesList />
          </Row>
          <Row>
            <SpacesList />
            <SpacesList />
            <SpacesList />
          </Row>
        </Col>
        <Col className="rightCol">
          <Row>
            <UsefulApps />
          </Row>
          <Row>
            <Box className="twitter-parent-box" style={{ display: 'none' }}>
              <a
                className="twitter-timeline"
                data-height="700"
                href="https://twitter.com/WeAreAmido?ref_src=twsrc%5Etfw"
              />
            </Box>
          </Row>
          <Row>
            <iframe
              src="https://www.linkedin.com/embed/feed/update/urn:li:share:6616282134443241472"
              height="530"
              width="400"
              frameBorder="0"
              title="Embedded post"
            />
          </Row>
        </Col>
      </HomePageWrapper>
    </Layout>
  )
}

export default HomePage
