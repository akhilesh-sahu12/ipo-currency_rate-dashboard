import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Dashboard from './Dashboard';

describe('Dashboard Component', () => {
  it('renders UpcomingIPOs and CurrencyRates components', () => {
    // Render the Dashboard component
    const { getByText } = render(<Dashboard />);

    // Check if UpcomingIPOs component is rendered
    const upcomingIPOsHeading = getByText('Upcoming IPOs');
    expect(upcomingIPOsHeading).toBeInTheDocument();

    // Check if CurrencyRates component is rendered
    const currencyRatesHeading = getByText('Latest Currency Rates');
    expect(currencyRatesHeading).toBeInTheDocument();
  });
});
