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
  .Layout {
    &-main {
      margin: 0 auto;
      padding: 30px 17px;
      @media (min-width: ${({ theme }) => theme.breakpoint.md}) {
        max-width: ${({ theme }) => theme.breakpoint.md};
        padding-left: 44px;
        padding-right: 44px;
      }
      @media (min-width: ${({ theme }) => theme.breakpoint.lg}) {
        max-width: ${({ theme }) => theme.breakpoint.lg};
      } 
      @media (min-width: ${({ theme }) => theme.breakpoint.xl}) {
        max-width: ${({ theme }) => theme.breakpoint.xl};
      }
    }
  }
`

export default React.memo(StyledLayout)
