import { render as renderComponent } from '@testing-library/react'
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'

export const render = (component: JSX.Element): void => {
  const history = createMemoryHistory({ initialEntries: ['/'] })

  renderComponent(
    <Router location={history.location} navigator={history}>
      {component}
    </Router>
  )
}
