(function () {
  'use strict';

  angular
    .module('akash')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($timeout, $scope, toastr) {
    $scope.chartConfig = {
      chart: {
        type: 'column'
      },
      xAxis: {
        type: 'category'
      },
      legend: {
        enabled: false
      },
      plotOptions: {
        series: {
          borderWidth: 0,
          dataLabels: {
            enabled: true,
            format: '{point.y:.1f}'
          }
        }
      },
      series: [{
        name: 'data',
        colorByPoint: true,
        data: [{
          name: 'A',
          y: 156.33
        }, {
          name: 'B',
          y: 24.03
        }, {
          name: 'C',
          y: 10.38
        }, {
          name: 'E',
          y: 4.77
        }, {
          name: 'Opera',
          y: 0.91
        }, {
          name: 'G',
          y: 0.2
        }]
      }]
    }
    $scope.chartConfig1 = {
      chart: {
        type: 'pie',
        marginTop: 2

      },
      plotOptions: {
        pie: {
          dataLabels: {
            enabled: true,
            distance: -30,
            style: {
              color: 'white'
            }
          },
          center: ['50%', '70%']
        }
      },
      series: [{
        type: 'pie',
        size: '70%',
        innerSize: '60%',
        data: [
          ['Firefox', 10.38],
          ['IE', 56.33],
          ['Chrome', 24.03],
          ['Safari', 24.77],
          ['Opera', 10.91],
          {
            name: 'Proprietary or Undetectable',
            y: 0.2,
            dataLabels: {
              enabled: false
            }
          }
        ]
      }],
      responsive: {
        rules: [{
          condition: {
            maxWidth: 400
          },
          chartOptions: {
            series: [{
              id: 'versions',
              dataLabels: {
                enabled: false
              }
            }]
          }
        }]
      }
    }
    //video
    $scope.videos = [
      {
        id: 1,
        link: 'https://www.youtube.com/embed/zKkUN-mJtPQ'
      },
      {
        id: 2,
        link: 'https://www.youtube.com/embed/mW25S2tiCOM'
      },
      {
        id: 3,
        link: 'https://www.youtube.com/embed/MzqkIZLkBsU'
      }, {
        id: 4,
        link: 'https://www.youtube.com/embed/hnKSv28dp_w'
      }
    ];

    $scope.totalItems = 64;
    $scope.currentPage = 1;

    $scope.setPage = function (pageNo) {
      $scope.currentPage = pageNo;
    };

    $scope.pageChanged = function () {
      //alert($scope.currentPage);
      angular.forEach($scope.videos, function (value) {
        if (value.id === $scope.currentPage) {
          $scope.url = value.link;
        }
      })
    };
    $scope.pageChanged();
  }
})();
