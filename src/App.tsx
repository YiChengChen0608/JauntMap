import React from 'react'
import { ThemeProvider } from 'styled-components'
import { theme } from './styles/global'
import Layout from './layout/default'

function App (): React.ReactElement {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <div>123</div>
      </Layout>
    </ThemeProvider>

  )
}

export default App
