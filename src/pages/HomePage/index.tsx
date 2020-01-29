/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react'
import DailyQuote from '../../components/DailyQuote'
import Layout from '../../components/PageLayout'
// import ContentPane from '../../compositions/ContentPane'
import DynamicContentPane from '../../compositions/DynamicContentPane'
import SearchPane from '../../compositions/SearchPane'
import TwitterPane from '../../compositions/TwitterPane'
import UsefulApps from '../../compositions/UsefulApps'
import { Col, HomePageWrapper, Intro, Row } from './components'

type HomePageProps = {}

// const items = [
//   {
//     id: 1,
//     type: 'lallero',
//     key: 'AC',
//     name: 'Amido Academy 1',
//     _links: {
//       webui: '/spaces/AC1',
//     },
//   },
//   {
//     id: 2,
//     type: 'lallero',
//     key: 'AC',
//     name: 'Amido Academy2',
//     _links: {
//       webui: '/spaces/AC2',
//     },
//   },
//   {
//     id: 3,
//     type: 'lallero',
//     key: 'AC',
//     name: 'Amido Academy2',
//     _links: {
//       webui: '/spaces/AC2',
//     },
//   },
//   {
//     id: 11,
//     type: 'lallero',
//     key: 'AC',
//     name: 'Amido Academy 1',
//     _links: {
//       webui: '/spaces/AC1',
//     },
//   },
//   {
//     id: 12,
//     type: 'lallero',
//     key: 'AC',
//     name: 'Amido Academy2',
//     _links: {
//       webui: '/spaces/AC2',
//     },
//   },
//   {
//     id: 13,
//     type: 'lallero',
//     key: 'AC',
//     name: 'Amido Academy2',
//     _links: {
//       webui: '/spaces/AC2',
//     },
//   },
// ]

const HomePage = (props: HomePageProps) => {
  return (
    <Layout>
      <HomePageWrapper className="mainContainer">
        <Col className="leftCol">
          <Row>
            <Intro>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
              dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
            </Intro>
          </Row>
          <Row>
            <SearchPane />
          </Row>
          <Row>
            <DynamicContentPane title={'Work Life'} colspan={3} label={'Portal-worklife'} />
          </Row>
          <Row>
            <DynamicContentPane title={'Projects'} colspan={1} label={'Portal-projects'} />
            <DynamicContentPane title={'Learning'} colspan={1} label={'Portal-learning'} />
          </Row>
          <Row>
            <DynamicContentPane
              title={'Domain Competencies'}
              colspan={1}
              label={'Portal-domaincompetency'}
            />
            <DynamicContentPane title={'Communities'} colspan={1} label={'Portal-communities'} />
            <DynamicContentPane title={'Events'} colspan={1} label={'Portal-events'} />
          </Row>
          <Row>
            <DynamicContentPane
              title={'Using Confluence'}
              colspan={1}
              label={'Portal-usingconfluence'}
            />
          </Row>
        </Col>
        <Col className="rightCol">
          <Row>
            <DailyQuote />
          </Row>
          <Row>
            <UsefulApps />
          </Row>
          <Row>
            <TwitterPane />
          </Row>
          {/* <Row>
            <iframe
              src="https://www.linkedin.com/embed/feed/update/urn:li:share:6616282134443241472"
              height="530"
              width="400"
              frameBorder="0"
              title="Embedded post"
            />
          </Row> */}
        </Col>
      </HomePageWrapper>
    </Layout>
  )
}

export default HomePage
