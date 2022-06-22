import React from 'react'
import { ThemeProvider } from 'styled-components'
import { theme } from './styles/global'
import StyledLayout from './layout/Layout'

function App (): React.ReactElement {
  return (
    <ThemeProvider theme={theme}>
      <StyledLayout>
      </StyledLayout>
    </ThemeProvider>

  )
}

export default App
