import React from 'react'
import { Theme } from 'src/styles/global'

export interface Props {
  className: string,
  children?: React.ReactNode,
  theme?: Theme
}
