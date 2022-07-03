import React from 'react'
import { ThemeProvider } from 'styled-components'
import { theme } from './styles/global'
import { TabProvider } from './hooks/useTabState'
import GlobalStyle from './styles/GlobalStyle'
import StyledLayout from './layout/Layout'
import Routes from './router'

function App (): React.ReactElement {
  return (
    <ThemeProvider theme={theme}>
      <TabProvider>
        <GlobalStyle />
        <StyledLayout>
          <Routes />
        </StyledLayout>
      </TabProvider>
    </ThemeProvider>

  )
}

export default App
