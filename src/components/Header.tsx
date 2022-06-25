import React from 'react'
import styled from 'styled-components'
import { Props } from '../../utils/types'
import { ReactComponent as Logo } from '../assets/images/logo.svg'
import { ReactComponent as Setting } from '../assets/images/setting.svg'
import { ReactComponent as DarkMode } from '../assets/images/dark_mode.svg'
import StyledTab from './Tab'

function Header ({ className, children }: Props): React.ReactElement {
  const [menuIsOpen, setMenuIsOpen] = React.useState<Boolean>(false)

  const setMenuStatus: React.MouseEventHandler<HTMLButtonElement> = React.useCallback(() => {
    return setMenuIsOpen((previousState) => !previousState)
  }, [])
  return (
    <header className={className}>
      <div className="header-logo">
        <Logo className="header-logo-image" />
      </div>
      <div className="header-middle">
        {children}
      </div>
      <div className="header-tab">
        <StyledTab className="header-menu" />
        <div className="header-submenu">
          <button className={`btn ${menuIsOpen ? 'btn-active' : ''}`} type='button' onClick={setMenuStatus}><Setting className="btn-icon" /></button>
          <div className={`header-submenu-popup ${menuIsOpen ? 'popup-active' : ''}`}>
            <button className="btn" type='button'><DarkMode className="btn-icon" /></button>
            <button className="btn-logout" type='button'>登出</button>
          </div>
        </div>
      </div>
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
  .header {
    &-middle {
      justify-self: center;
    }
    &-tab {
      justify-self: flex-end;
      display: flex;
      gap: 10px;
    }
    &-menu {
      @media (max-width: ${({ theme }) => theme.device.tablet}) {
        display: none;
      }
    }
    &-submenu {
      position: relative;
      &-popup {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1rem;
        max-height: 0;
        border-radius: 6px;
        padding: 0 8px;
        margin-top: .5rem;
        background: ${({ theme }) => theme.colors.background};
        box-shadow: ${({ theme }) => theme.effects.card_shadow};
        position: absolute;
        right: 50%;
        transform: translateX(50%);
        transition: all 0.3s ease-out;
        opacity: 0;
        .btn-logout {
          border: none;
          background: transparent;
          letter-spacing: 0.2em;
          padding: 0;
          color: ${({ theme }) => theme.colors.blue_green};
          font-style: ${({ theme }) => theme.texts.font_style};
          font-weight: ${({ theme }) => theme.texts.font_weigth};
          font-size: ${({ theme }) => theme.texts.H7_TC.font_size};
          line-height: ${({ theme }) => theme.texts.H7_TC.line_height};
        }
      }
      .popup-active {
        max-height: 109px;
        padding: 14px 8px;
        opacity: 1;
      }
    }
  }
`
export default React.memo(StyledHeader)
