import React from 'react'
import MainContent from './Main'
import Dashboard from '../../pages/Dashboard'

const PrivateRoute = ({component}) => {
  return (
    <div>
      <MainContent>{component}</MainContent>
    </div>
  )
}

export default PrivateRoute
