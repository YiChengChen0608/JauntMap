import React from 'react'
import type { RouteObject } from 'react-router-dom'
import { useRoutes } from 'react-router-dom'

const Home = React.lazy(() => import('../pages/Home'))

function Routes () {
  const routes: RouteObject[] = [
    {
      path: '/',
      element: <Home />
    }
  ]
  return useRoutes(routes)
}

export default Routes
