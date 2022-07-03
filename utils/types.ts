import React from 'react'
import { DefaultTheme } from 'styled-components'

export interface Props {
  className: string,
  children?: React.ReactNode,
  theme?: DefaultTheme
}
