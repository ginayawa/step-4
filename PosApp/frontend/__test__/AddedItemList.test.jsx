import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import AddedItemsList from '../src/app/page'
 
describe('AddedItemsList', () => {
  it('renders a heading', () => {
    render(<AddedItemsList />)
 
    const heading = screen.getByRole('region', { name: /Added Items:/i })
 
    expect(heading).toBeInTheDocument()
  })
})