import React from 'react';
import { render, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Highchart from './Highchart';

const sampleData = [
  { date: '2022-01-01', rate: 1.2 },
  { date: '2022-01-02', rate: 1.3 },
  // Add more sample data as needed
];

describe('Highchart', () => {
  it('renders the component with sample data', async () => {
    render(<Highchart data={sampleData} />);

    // Wait for the chart to be updated with the sample data
    await waitFor(() => expect(document.getElementById('container')).toBeInTheDocument());

    // You can add more specific assertions based on your chart's content and behavior
    // For example, you can check if certain elements or labels are present in the chart

    // Example assertion: Check if the chart title is rendered
    expect(document.querySelector('.highcharts-title')).toHaveTextContent('USD to EUR exchange rate over 100 days');
  });

  // Add more test cases as needed
});
