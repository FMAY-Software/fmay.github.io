import React from 'react'
import AppRoute from '../utils/AppRoute'
import {Switch} from 'react-router-dom'

// Layouts
import LayoutDefault from '../layouts/LayoutDefault'

// Views
import Home from '../views/Home'
import JavaWizard from '../components/demos/java/JavaWizard'

const Routes = (props) => {
  return (
    <Switch>
      <AppRoute
        exact
        path={'/contracting'}
        component={Home}
        layout={LayoutDefault}
      />
      <AppRoute
        exact
        path={'/contracting/java-demo'}
        component={JavaWizard}
        layout={LayoutDefault}
      />
    </Switch>
  )
}

export default Routes
