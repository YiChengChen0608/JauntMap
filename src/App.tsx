import React from 'react'
import { ThemeProvider } from 'styled-components'
import { theme } from 'styles/global'

function App () {
  return (
    <ThemeProvider theme={theme}>
      <div></div>
    </ThemeProvider>

  )
}

export default App
