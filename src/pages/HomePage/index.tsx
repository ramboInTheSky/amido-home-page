/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react'
import Layout from '../../components/PageLayout'
import { Box } from '../../components/SharedStyledComponents'
import UsefulApps from '../../components/UsefulApps'
import ContentPane from '../../compositions/ContentPane'
import SearchPane from '../../compositions/SearchPane'
import SpacesList from '../../compositions/SpacesListPane'
import { Col, HomePageWrapper, Row } from './components'

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

const items = [
  {
    id: 1,
    type: 'lallero',
    key: 'AC',
    name: 'Amido Academy 1',
    _links: {
      webui: '/spaces/AC1',
    },
  },
  {
    id: 2,
    type: 'lallero',
    key: 'AC',
    name: 'Amido Academy2',
    _links: {
      webui: '/spaces/AC2',
    },
  },
  {
    id: 3,
    type: 'lallero',
    key: 'AC',
    name: 'Amido Academy2',
    _links: {
      webui: '/spaces/AC2',
    },
  },
  {
    id: 11,
    type: 'lallero',
    key: 'AC',
    name: 'Amido Academy 1',
    _links: {
      webui: '/spaces/AC1',
    },
  },
  {
    id: 12,
    type: 'lallero',
    key: 'AC',
    name: 'Amido Academy2',
    _links: {
      webui: '/spaces/AC2',
    },
  },
  {
    id: 13,
    type: 'lallero',
    key: 'AC',
    name: 'Amido Academy2',
    _links: {
      webui: '/spaces/AC2',
    },
  },
]

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
            <ContentPane spaceKey="Amido Work Life" results={items} colspan={3} />
          </Row>
          <Row>
            <ContentPane spaceKey="Amido Work Life" results={items} colspan={2} />
            <ContentPane spaceKey="Amido Work Life" results={items} colspan={2} />
          </Row>
          <Row>
            <ContentPane spaceKey="Amido Work Life" results={items} colspan={1} />
            <ContentPane spaceKey="Amido Work Life" results={items} colspan={1} />
            <ContentPane spaceKey="Amido Work Life" results={items} colspan={1} />
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
