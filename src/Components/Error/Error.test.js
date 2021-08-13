import { render, screen } from '@testing-library/react';
import Error from './Error';

test('rendering text in Error component', () => {
  render(<Error />);
  const linkElement = screen.getByText(/Something went wrong/i);
  expect(linkElement).toBeInTheDocument();
});
