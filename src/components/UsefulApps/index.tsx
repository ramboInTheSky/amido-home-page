import React from 'react'
import { Box } from '../../components/SharedStyledComponents'
import { App, AppsList, Header, Icon } from './components'

type UsefulAppsProps = {}

const UsefulApps = (props: UsefulAppsProps) => {
  return (
    <Box>
      <Header>Useful Apps</Header>
      <AppsList>
        <App target="_blank" rel="noopener noreferrer" href={'https://app.hibob.com/'}>
            Bob HR
            <Icon src={'/boblogo.png'} alt={'Bob HR'} title={'Bob HR'} />
        </App>
        <App target="_blank" rel="noopener noreferrer" href={'https://linkedin.com/'}>
            LinkedIn
          <Icon src={'/linkedinlogo.png'} alt={'Linkedin'} title={'Linkedin'} />
        </App>
        <App target="_blank" rel="noopener noreferrer" href={'https://lucidchart.com/'}>
            Lucidcharts
          <Icon src={'/lucidchartlogo.png'} alt={'Lucidcharts'} title={'Lucidcharts'} />
        </App>
        <App target="_blank" rel="noopener noreferrer" href={'https://amido.sharepoint.com/'}>
            Sharepoint
          <Icon src={'/sharepointlogo.svg'} alt={'Sharepoint'} title={'Sharepoint'} />
        </App>
        <App target="_blank" rel="noopener noreferrer" href={'https://app2.greenhouse.io/dashboard'}>
            Greenhouse
          <Icon src={'/greenhouselogo.png'} alt={'Greenhouse'} title={'Greenhouse'} />
        </App>
        <App target="_blank" rel="noopener noreferrer" href={'https://go.accessacloud.com/'}>
            Access
          <Icon src={'/accesslogo.png'} alt={'Access'} title={'Access'} />
        </App>
      </AppsList>
    </Box>
  )
}

export default UsefulApps
