import React from 'react'

enum ActionTypeEnum {
  SET_TAB = 'SET_TAB'
}
interface TabState {
  currentTab: string
}

interface TabAction {
  type: string,
  payload: string
}

interface ProviderValue {
  state: TabState,
  dispatch: React.Dispatch<TabAction>
}

const initialState: TabState = {
  currentTab: 'search'
}

const reducer = (state: TabState, action: TabAction): TabState => {
  switch (action.type) {
    case ActionTypeEnum.SET_TAB:
      return { ...state, currentTab: action.payload }
    default:
      return state
  }
}

const TabContext = React.createContext({} as ProviderValue)

export const TabProvider = React.memo(function TabProvider ({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = React.useReducer(reducer, initialState)
  const value = { state, dispatch }

  return (
    <TabContext.Provider value={value}>
      {children}
    </TabContext.Provider>
  )
})

export function useTabState () {
  const { state: tabState, dispatch } = React.useContext(TabContext)

  const setTab = React.useCallback((payload: string): void => {
    return dispatch({ type: 'SET_TAB', payload })
  }, [dispatch])

  return { tabState, setTab }
}
