angular.module('elocator',['elocator.models.testVariations'])

  .config(function($stateProvider){
    $stateProvider
      .state('elocator',{
        url: '/',
        views:{
          'elocator@':{
            controller: 'ElocCtrl',
            templateUrl: 'app/elocator/elocator.html'
          }
        }
      })
  })

;
