import React, { useEffect } from 'react';
import Highcharts from 'highcharts';
import HCExporting from 'highcharts/modules/exporting';

// Initialize Highcharts modules
HCExporting(Highcharts);

const Highchart = ({ data }) => {
  // Update chart configuration with fetched data
  const updateChartConfig = (data) => {
    const chartData = data.map((point) => ({
      x: new Date(point.date).getTime(),
      y: point.rate,
    }));

    chartConfig.series[0].data = chartData;
    Highcharts.chart('container', chartConfig);
  };

  useEffect(() => {
    if (data && data.length > 0) {
      updateChartConfig(data[0]);
    }
  }, [data]);

  // Chart configuration
  const chartConfig = {
    chart: {
      zoomType: 'x',
    },
    title: {
      text: 'USD to EUR exchange rate over 100 days',
      align: 'left',
    },
    subtitle: {
      text: document.ontouchstart === undefined
        ? 'Click and drag in the plot area to zoom in'
        : 'Pinch the chart to zoom in',
      align: 'left',
    },
    xAxis: {
      type: 'datetime',
    },
    yAxis: {
      title: {
        text: 'Exchange rate',
      },
    },
    legend: {
      enabled: false,
    },
    credits: {
      enabled: false, // Disable Highcharts.com credits
    },
    plotOptions: {
      area: {
        fillColor: {
          linearGradient: {
            x1: 0,
            y1: 0,
            x2: 0,
            y2: 1,
          },
          stops: [
            [0, Highcharts.getOptions().colors[0]],
            [1, Highcharts.color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')],
          ],
        },
        marker: {
          radius: 2,
        },
        lineWidth: 1,
        states: {
          hover: {
            lineWidth: 1,
          },
        },
        threshold: null,
      },
    },
    series: [{
      type: 'area',
      name: 'USD to EUR',
      data: [], // The data will be populated dynamically
    }],
  };

  return <div id="container"></div>;
};

export default Highchart;
