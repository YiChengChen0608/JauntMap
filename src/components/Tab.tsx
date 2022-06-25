import React from 'react'
import styled from 'styled-components'
import { ReactComponent as Search } from '../assets/images/search.svg'
import { ReactComponent as Favorites } from '../assets/images/favorites.svg'
import { ReactComponent as Calendar } from '../assets/images/calendar.svg'
import { ReactComponent as Setting } from '../assets/images/setting.svg'
import { ReactComponent as Camera } from '../assets/images/camera.svg'
import { useTabState } from '../hooks/useTabState'
import { Props } from 'utils/types'

function Tab ({ className }: Props) {
  const { tabState: { currentTab }, setTab } = useTabState()

  const selectBtnActive = React.useCallback((btn: string): string => {
    return currentTab === btn ? 'btn-active' : ''
  }, [currentTab])

  return React.useMemo(() => (
    <div className={className}>
      <button className={`btn ${selectBtnActive('search')}`} type='button' onClick={() => setTab('search')}><Search className="btn-icon" /></button>
      <button className={`btn ${selectBtnActive('favorites')}`} type='button' onClick={() => setTab('favorites')}><Favorites className="btn-icon" /></button>
      <button className={`btn ${selectBtnActive('calendar')}`} type='button' onClick={() => setTab('calendar')}><Calendar className="btn-icon" /></button>
      <button className={`btn ${selectBtnActive('camera')}`} type='button' onClick={() => setTab('camera')}><Camera className="btn-icon" /></button>
      <button className={`btn ${selectBtnActive('setting')}`} type='button' onClick={() => setTab('setting')}><Setting className="btn-icon" /></button>
    </div>
  ), [currentTab])
}

const StyledTab = styled(Tab)<Props>`
  justify-self: flex-end;
  display: flex;
  gap: 10px;
  .btn {
    position: relative;
    width: 40px;
    height: 40px;
    border-radius: 50px;
    background: ${({ theme }) => theme.colors.background};
    border-color: transparent;
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
`
export default React.memo(StyledTab)
