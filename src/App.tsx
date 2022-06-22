import React from 'react'
import { ThemeProvider } from 'styled-components'
import { theme } from './styles/global'
import StyledLayout from './layout/Layout'
import { TabProvider } from './hooks/useTabState'

function App (): React.ReactElement {
  return (
    <ThemeProvider theme={theme}>
      <TabProvider>
        <StyledLayout>
        </StyledLayout>
      </TabProvider>
    </ThemeProvider>

  )
}

export default App
