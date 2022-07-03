import React from 'react'
import styled from 'styled-components'
import { Props } from '../../utils/types'
import StyledTab from './Tab'

function Footer ({ className }: Props): React.ReactElement {
  return (
    <>
      <StyledTab className={className} />
    </>
  )
}

const StyledFooter = styled(Footer)<Props>`
  position: fixed;
    bottom: 0;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    place-items: center;
    gap: 0;
    padding: 8px 0;
    background: rgba(234, 235, 237, 0.8);
    backdrop-filter: blur(8px);
    z-index: 999;
  @media (min-width: ${({ theme }) => theme.breakpoint.md}) {
    display: none;
  }
`

export default React.memo(StyledFooter)
