import { render, screen } from '@testing-library/react';
import Welcome from './pages/Welcome';

test('renders learn react link', () => {
  render(<Welcome />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
