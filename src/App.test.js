import { render, screen } from '@testing-library/react';
import App from './App';

test('renders header in App component', () => {
  render(<App />);
  const headerElement = screen.getByText(/IPOs & Currency Rates/i);
  expect(headerElement).toBeInTheDocument();
});

