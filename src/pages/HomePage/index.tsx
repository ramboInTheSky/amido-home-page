/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react'
import Layout from '../../components/PageLayout'
import UsefulApps from '../../components/UsefulApps'
import SearchPane from '../../compositions/SearchPane'
import SpacesList from '../../compositions/SpacesListPane'
import { Col, HomePageWrapper, Row } from './components'

type HomePageProps = {}

const HomePage = (props: HomePageProps) => {
  setTimeout(() => {
    const element = document.querySelector('#twitter-widget-0') as any
    element?.contentDocument.getElementsByTagName('footer')[0]?.remove()
  }, 1000)
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
            <a
              className="twitter-timeline"
              data-height="700"
              href="https://twitter.com/WeAreAmido?ref_src=twsrc%5Etfw"
            />
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
