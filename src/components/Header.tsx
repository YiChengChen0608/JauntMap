import React from 'react'
import styled from 'styled-components'
import { Props } from '../../utils/types'
import { Theme } from '../styles/global'
import { ReactComponent as Logo } from '../assets/images/logo.svg'
import { ReactComponent as Search } from '../assets/images/search.svg'
import { ReactComponent as Favorites } from '../assets/images/favorites.svg'
import { ReactComponent as Calendar } from '../assets/images/calendar.svg'
import { ReactComponent as Setting } from '../assets/images/setting.svg'
import { ReactComponent as Camera } from '../assets/images/camera.svg'

interface HeaderProps extends Props {
  theme?: Theme
}

function Header ({ className, children }: HeaderProps): React.ReactElement {
  return (
    <header className={className}>
      <div className="header-logo">
        <Logo className="header-logo-image" />
      </div>
      {children}
      <div className="header-tabs">
        <button type='button'><Search className="icon" /></button>
        <button type='button'><Favorites className="icon" /></button>
        <button type='button'><Calendar className="icon" /></button>
        <button type='button'><Camera className="icon" /></button>
        <button type='button'><Setting className="icon" /></button>
      </div>
    </header>
  )
}

const StyledHeader = styled(Header)<HeaderProps>`
  background: rgba(234, 235, 237, 0.8);
  backdrop-filter: blur(8px);
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  align-items: center;
  padding: 18px 40px;
  .header {
    &-tabs {
      justify-self: flex-end;
      display: flex;
      gap: 10px;
      button {
        position: relative;
        width: 40px;
        height: 40px;
        border-radius: 50px;
        background: ${({ theme }) => theme.colors.background};
        border-color: transparent;
        box-shadow: ${({ theme }) => theme.effects.btn_shadow};
        cursor: pointer;
        &:hover {
          background: ${({ theme }) => theme.colors.Gradual};
          box-shadow: ${({ theme }) => theme.effects.btn_shadow2};
          .icon path {
            stroke: ${({ theme }) => theme.colors.white};
            stroke-width: 0.1px;
            fill: ${({ theme }) => theme.colors.white};
          }
        }
        .icon {
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
        }
      }
    }
  }
`
export default React.memo(StyledHeader)
