import React from 'react'
import styled from 'styled-components'
import { Theme } from '../styles/global'

interface ContainerProps {
  className: string,
  children: React.ReactNode,
  theme?: Theme
}

function Container ({ className, children }: ContainerProps): React.ReactElement {
  return (
    <div className={className}>
      <header></header>
      <main className="container-main">{children}</main>
    </div>
  )
}

const Layout = styled(Container)<ContainerProps>`
  background: ${({ theme }) => theme.colors.background};
  .container {
    &-main {
      max-width: 1280px;
      margin: 0 auto;
    }
  }
`

export default React.memo(Layout)
