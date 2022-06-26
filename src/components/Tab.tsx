import React from 'react'
import styled from 'styled-components'
import { ReactComponent as Search } from '../assets/images/search.svg'
import { ReactComponent as Favorites } from '../assets/images/favorites.svg'
import { ReactComponent as Calendar } from '../assets/images/calendar.svg'
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
    </div>
  ), [currentTab])
}

const StyledTab = styled(Tab)<Props>`
  display: flex;
  gap: 10px;
`
export default React.memo(StyledTab)
