angular.module('Pokedex', ['ionic', 'starter.controllers', 'starter.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if (window.cordova && window.Keyboard) {
      window.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      // Set the statusbar to use the default style, tweak this to
      // remove the status bar on iOS or change it to use white instead of dark colors.
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
  .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })
  .state('tab.pokemon', {
      url: '/pokemon',
      views: {
        'tab-pokemon': {
          templateUrl: 'templates/tab-pokemon.html',
          controller: 'PokemonCtrl'
        }
      }
  })
  .state('tab.pokemon-detail', {
      url: '/pokemon/:pokeId',
      views: {
        'tab-pokemon': {
          templateUrl: 'templates/pokemon-detail.html',
          controller: 'PokemonDetailCtrl'
        }
      }
    })

  .state('tab.config', {
    url: '/config',
    views: {
      'tab-config': {
        templateUrl: 'templates/tab-config.html',
        controller: 'ConfigCtrl'
      }
    }
  });
  $urlRouterProvider.otherwise('/tab/pokemon');
});
