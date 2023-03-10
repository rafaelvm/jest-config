import { render } from '@testing-library/react'
import { Button } from './Button.component'

test('should render correctly', () => {
  const { container } = render(<Button variant="primary" label="Text" />)

  expect(container.firstChild).toMatchSnapshot()
})
