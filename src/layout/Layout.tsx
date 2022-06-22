import React from 'react'
import styled from 'styled-components'
import { Theme } from '../styles/global'
import StyledHeader from '../components/Header'

interface LayoutProps {
  className: string,
  children: React.ReactNode,
  theme?: Theme
}

function Layout ({ className, children }: LayoutProps): React.ReactElement {
  return (
    <div className={className}>
      <StyledHeader><div>123</div></StyledHeader>
      <main className="Layout-main">{children}</main>
    </div>
  )
}

const StyledLayout = styled(Layout)<LayoutProps>`
  background: ${({ theme }) => theme.colors.background};
  .Layout {
    &-main {
      max-width: 1280px;
      margin: 0 auto;
    }
  }
`

export default React.memo(StyledLayout)
