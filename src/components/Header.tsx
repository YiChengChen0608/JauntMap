import React from 'react'
import styled from 'styled-components'
import { Props } from '../../utils/types'
import { ReactComponent as Logo } from '../assets/images/logo.svg'
import Tab from './Tab'

function Header ({ className, children }: Props): React.ReactElement {
  return (
    <header className={className}>
      <div className="header-logo">
        <Logo className="header-logo-image" />
      </div>
      {children}
      <Tab />
    </header>
  )
}

const StyledHeader = styled(Header)<Props>`
  background: rgba(234, 235, 237, 0.8);
  backdrop-filter: blur(8px);
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  align-items: center;
  padding: 18px 40px;
`
export default React.memo(StyledHeader)
