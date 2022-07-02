import React from 'react'
import styled from 'styled-components'
import StyledHeader from '../components/Header'
import StyledFooter from '../components/Footer'
import { Props } from 'utils/types'
import { getTourismList, getTdxAccessToken } from '../services/tourism'
import Cookies from 'js-cookie'

function Layout ({ className, children }: Props): React.ReactElement {
  React.useEffect(() => {
    const abortController = new AbortController()
    async function getTourism () {
      if (!Cookies.get('tdxAccessToken')) {
        const { data: { access_token, expires_in } } = await getTdxAccessToken({ signal: abortController.signal })
        // 86400 為一天的秒數
        Cookies.set('tdxAccessToken', access_token, { expires: expires_in / 86400 })
      }

      await getTourismList({ signal: abortController.signal, params: { $top: 30, $format: 'JSON' }, headers: { Authorization: `${'Bearer ' + Cookies.get('tdxAccessToken')}` } })
    }
    getTourism()
    return () => {
      abortController.abort()
    }
  }, [])

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
      height: 1200px;
      margin: 38px auto;
      @media (max-width: ${({ theme }) => theme.device.mobile}) {
        margin: 30px auto;
      }
    }
    
  }
`

export default React.memo(StyledLayout)
