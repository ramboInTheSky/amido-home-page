import React from 'react'
import { Box } from '../../components/SharedStyledComponents'
import { App, AppsList, Header, Icon } from './components'

type UsefulAppsProps = {}

const UsefulApps = (props: UsefulAppsProps) => {
  return (
    <Box>
      <Header>Useful Apps</Header>
      <AppsList>
      <App>
          <Icon src={'/boblogo.png'} />
        </App><App>
          <Icon src={'/boblogo.png'} />
        </App><App>
          <Icon src={'/boblogo.png'} />
        </App><App>
          <Icon src={'/boblogo.png'} />
        </App><App>
          <Icon src={'/boblogo.png'} />
        </App><App>
          <Icon src={'/boblogo.png'} />
        </App>
      </AppsList>
    </Box>
  )
}

export default UsefulApps
