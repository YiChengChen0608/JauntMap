import React from 'react'
import styled from 'styled-components'
import StyledHeader from '../components/Header'
import { Props } from 'utils/types'

function Layout ({ className, children }: Props): React.ReactElement {
  return (
    <div className={className}>
      <StyledHeader><div>123</div></StyledHeader>
      <main className="Layout-main">{children}</main>
    </div>
  )
}

const StyledLayout = styled(Layout)<Props>`
  background: ${({ theme }) => theme.colors.background};
  .Layout {
    &-main {
      max-width: 1280px;
      margin: 0 auto;
    }
  }
`

export default React.memo(StyledLayout)
