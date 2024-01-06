import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import UpcomingIPOs from './UpcomingIPOs';
import useIPOsData from '../../hooks/useIPOsData';

// Mock the useIPOsData hook
jest.mock('../../hooks/useIPOsData');

describe('UpcomingIPOs', () => {
  it('renders the component with upcoming IPOs', async () => {
    // Mock the data returned by useIPOsData
    const mockIPOsData = [
      { companyName: 'Company A', symbol: 'A', offeringDate: '2022-01-01' },
      { companyName: 'Company B', symbol: 'B', offeringDate: '2022-02-01' },
    ];

    useIPOsData.mockReturnValue(mockIPOsData);

    render(<UpcomingIPOs />);

    // Wait for the component to render with data
    await waitFor(() => {
      expect(screen.getByText('Upcoming IPOs')).toBeInTheDocument();
      expect(screen.getByText('Company A')).toBeInTheDocument();
      expect(screen.getByText('Symbol: A')).toBeInTheDocument();
      expect(screen.getByText('Offering Date: 2022-01-01')).toBeInTheDocument();
      expect(screen.getByText('Company B')).toBeInTheDocument();
      expect(screen.getByText('Symbol: B')).toBeInTheDocument();
      expect(screen.getByText('Offering Date: 2022-02-01')).toBeInTheDocument();
    });
  });

  it('renders the component with no upcoming IPOs', async () => {
    // Mock the data returned by useIPOsData as an empty array
    useIPOsData.mockReturnValue([]);

    render(<UpcomingIPOs />);

    // Wait for the component to render with no data
    await waitFor(() => {
      expect(screen.getByText('Upcoming IPOs')).toBeInTheDocument();
    });
  });
});
