import React from 'react';
import { render, waitFor, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import HighChartDataFetcher from './HighChartDataFetcher';

// Mock the fetch function to simulate a successful response
jest.mock('node-fetch', () => jest.fn(() => Promise.resolve({
  ok: true,
  json: () => Promise.resolve([{ date: '2022-01-01', value: 100 }, { date: '2022-01-02', value: 150 }])
})));

describe('HighChartDataFetcher', () => {
  test('renders HighChartDataFetcher component with historical data', async () => {
    render(<HighChartDataFetcher />);

    // Wait for the data to be loaded
    await waitFor(() => {
      expect(screen.getByTestId('highchart')).toBeInTheDocument();
    });
  });

  test('handles fetch error', async () => {
    // Mock the fetch function to simulate a failed response
    jest.spyOn(global, 'fetch').mockImplementationOnce(() => Promise.reject(new Error('Failed to fetch')));

    render(<HighChartDataFetcher />);

    // Wait for the error message to be displayed
    await waitFor(() => {
      expect(screen.getByText('Error fetching historical data: Failed to fetch')).toBeInTheDocument();
    });

    // Restore the original fetch implementation
    global.fetch.mockRestore();
  });
});
