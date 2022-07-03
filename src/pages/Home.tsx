import React from 'react'
import styled from 'styled-components'
import { Props } from '../../utils/types'
interface HomeMenu {
  id: string,
  title: string
}

const homeMenu: HomeMenu[] = [
  {
    id: 'all',
    title: '全部'
  },
  {
    id: 'outdoor',
    title: '戶外'
  },
  {
    id: 'art',
    title: '藝文'
  },
  {
    id: 'historicSite',
    title: '古蹟'
  },
  {
    id: 'free',
    title: '免費'
  }
]

function Home ({ className }: Props): React.ReactElement {
  const [selectedMenu, setSelectedMenu] = React.useState<string>('all')

  return (
    <div className={className}>
      <div className='home-menu'>
        {homeMenu.map(menu => {
          return (
            <button className={`btn-font ${selectedMenu === menu.id ? 'btn-active' : ''} home-menu-btn`} key={menu.id} onClick={() => setSelectedMenu(menu.id)}>{menu.title}</button>
          )
        })}
      </div>
    </div>
  )
}

const StyledHome = styled(Home)<Props>`
  .home {
    &-menu {
      display: grid;
      grid-template-columns: repeat(5, minmax(60px, 105px));
      place-items: center;
      justify-content: center;
      gap: 8px;
      &-btn {
        width: 100%;
        padding: 10px;
        border: none;
        background: ${({ theme }) => theme.colors.background};
        box-shadow: ${({ theme }) => theme.effects.card_shadow};
        border-radius: 8px;
      }
      @media (min-width: ${({ theme }) => theme.breakpoint.md}) {
        gap: 12px;
      }
    }
  }
`

export default React.memo(StyledHome)
