import { render, screen } from '@testing-library/react';
import RadioLabel from './RadioLabel';

test('rendering text in RadioLabel component', () => {
  render(<RadioLabel><p>This is some p</p></RadioLabel>);
  const linkElement = screen.getByText(/This is some p/i);
  expect(linkElement).toBeInTheDocument();
});
