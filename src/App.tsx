import React from 'react'
import { ThemeProvider } from 'styled-components'
import { theme } from './styles/global'
import StyledLayout from './layout/Layout'
import { TabProvider } from './hooks/useTabState'
import Routes from './router'

function App (): React.ReactElement {
  return (
    <ThemeProvider theme={theme}>
      <TabProvider>
        <StyledLayout>
          <Routes />
        </StyledLayout>
      </TabProvider>
    </ThemeProvider>

  )
}

export default App
