import React from 'react'
import SearchPane from '../../compositions/SearchPane'
import SpacesList from '../../compositions/SpacesListPane'
import { Col, HomePageWrapper, Row } from './components'

type HomePageProps = {}

const HomePage = (props: HomePageProps) => {
  return (
    <HomePageWrapper className="mainContainer">
      <Col className="leftCol">
        <Row>
          <SearchPane />
        </Row>
        <Row>
          <SpacesList />
          <SpacesList />
        </Row>
        <Row>
          <SpacesList />
          <SpacesList />
        </Row>
      </Col>
      <Col className="rightCol">
        <SearchPane />
        <SearchPane />
        <SearchPane />
        <SearchPane />
        <SearchPane />
        
      </Col>
    </HomePageWrapper>
  )
}

export default HomePage
