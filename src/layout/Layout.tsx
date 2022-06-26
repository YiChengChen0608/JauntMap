import React from 'react'
import styled from 'styled-components'
import StyledHeader from '../components/Header'
import StyledFooter from '../components/Footer'
import { Props } from 'utils/types'

function Layout ({ className, children }: Props): React.ReactElement {
  return (
    <div className={className}>
      <StyledHeader><div>123</div></StyledHeader>
      <main className="Layout-main">{children}</main>
      <StyledFooter />
    </div>
  )
}

const StyledLayout = styled(Layout)<Props>`
  background: ${({ theme }) => theme.colors.background};
  .btn {
    position: relative;
    width: 40px;
    height: 40px;
    border-radius: 50px;
    background: ${({ theme }) => theme.colors.background};
    border: none;
    box-shadow: ${({ theme }) => theme.effects.btn_shadow};
    cursor: pointer;
    &-icon {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
    }
    &-active {
      background: ${({ theme }) => theme.colors.Gradual};
      box-shadow: ${({ theme }) => theme.effects.btn_shadow2};
      .btn-icon path {
        stroke: ${({ theme }) => theme.colors.white};
        stroke-width: 0.1px;
        fill: ${({ theme }) => theme.colors.white};
      }
    }
  }
  .Layout {
    &-main {
      max-width: ${({ theme }) => theme.device.desktop};
      margin: 0 auto;
    }
    
  }
`

export default React.memo(StyledLayout)
