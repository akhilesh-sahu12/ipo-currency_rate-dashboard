import React from 'react';
import { render, waitFor, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import CurrencyRates from './CurrencyRates';
import useCurrencyRatesData from '../../hooks/useCurrencyRatesData';

jest.mock('../../hooks/useCurrencyRatesData', () => ({
  __esModule: true,
  default: jest.fn(),
}));

describe('CurrencyRates Component', () => {
  beforeEach(() => {
    // Clear all mocks before each test
    jest.clearAllMocks();
  });

  it('renders CurrencyRates component with currency rates', async () => {
    // Mocking the data returned from the useCurrencyRatesData hook
    const mockCurrencyRatesData = [
      { symbol: 'USDCAD', rate: 1.25 },
      { symbol: 'GBPUSD', rate: 1.42 },
      { symbol: 'USDJPY', rate: 110.25 },
    ];

    // Mocking the useCurrencyRatesData hook to return the mock data
    useCurrencyRatesData.mockReturnValue(mockCurrencyRatesData);

    render(<CurrencyRates />);

    // Wait for the component to render with the mock data
    await waitFor(() => {
      // Assert that the component rendered with the correct data
      expect(screen.getByText('Latest Currency Rates')).toBeInTheDocument();
      expect(screen.getByText('USDCAD:')).toBeInTheDocument();
      expect(screen.getByText('1.25')).toBeInTheDocument();
      expect(screen.getByText('GBPUSD:')).toBeInTheDocument();
      expect(screen.getByText('1.42')).toBeInTheDocument();
      expect(screen.getByText('USDJPY:')).toBeInTheDocument();
      expect(screen.getByText('110.25')).toBeInTheDocument();
    });
  });

  it('handles error when fetching currency rates', async () => {
    // Mocking the useCurrencyRatesData hook to return an error-like object
    useCurrencyRatesData.mockReturnValueOnce({ error: 'Failed to fetch currency rates' });

    // Mocking console.error
    const errorSpy = jest.spyOn(console, 'error').mockImplementation(() => {});

    render(<CurrencyRates />);

    // Wait for the component to handle the error
    await waitFor(() => {
      // Assert that the error message is logged
      expect(errorSpy).toHaveBeenCalledWith(expect.any(Error));
      // Add more assertions as needed
    });

    // Restore the original console.error function
    errorSpy.mockRestore();
  });
});
