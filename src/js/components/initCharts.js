const Highcharts = require('highcharts/highstock');
window.Highcharts = Highcharts;
require('highcharts/modules/exporting')(Highcharts);

export function initCharts() {
  const $chartBlock = $('.js-chart');

  $chartBlock.each(function () {
    $(this).highcharts({
      chart: {
        width: 706,
        height: 319
      },
      title: {
        text: 'Portfolio performance vs S&P500'
      },
      tooltip: {
        enabled: false
      },
      xAxis: {
        categories: perfDates
      },
      yAxis: {
        title: {
          text: 'Performance, %'
        },
      },
      plotOptions: {
        series: {
          marker: {
            enabled: false
          }
        }
      },
      series: [{
        name: 'Portfolio',
        dataLabels: {
          enabled: false,
        },
        data: portfolio,
        states: {
          hover: {
            enabled: false
          }
        }
      }, {
        name: 'SP500',
        dataLabels: {
          enabled: false,
        },
        data: sp500,
        states: {
          hover: {
            enabled: false
          }
        }
      }]
    });
  });
}