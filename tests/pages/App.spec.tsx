import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'
import { Item } from '~/models/item'
import { App } from '~/pages'

describe('App', () => {
  describe('render correctely with info correctely', () => {
    beforeEach(() => {
      const item: Item = {
        id: 1,
        color: 'red',
        describe: 'any_describe'
      }
    
      const history = createMemoryHistory({ initialEntries: ['/'] })
    
      render(
        <Router location={history.location} navigator={history}>
          <App item={item} />
        </Router>
      )
    })
  
    test('should render when start correctely', () => {
      expect(screen.getByTestId('container').className).toMatch('red')
    })
  
    test('should render correctely when click in container ', () => {
      const container = screen.getByTestId('container')
      expect(container.className).toMatch('red')
  
      userEvent.click(screen.getByTestId('link'))
  
      expect(container.className).toMatch('red')
    })
  })
  describe('render with red with info incorrectely', () => {
    beforeEach(() => {
      const history = createMemoryHistory({ initialEntries: ['/'] })
    
      render(
        <Router location={history.location} navigator={history}>
          <App item={null} />
        </Router>
      )
    })
  
    test('should render when start correctely', () => {
      expect(screen.getByTestId('container').className).toMatch('red')
    })
  })
})
