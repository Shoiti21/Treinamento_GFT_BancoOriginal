angular.module('AppMaquina').config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('tab', {
            url: '/tab',
            abstract: true,
            templateUrl: 'view/tabs.html'
        })
        .state('tab.home', {
            url: '/home',
            views: {
                'tab-home': {
                    templateUrl: 'view/home.html',
                    controller: 'PedirMaquinaCtrl'
                }
            }
        })
        .state('tab.home-confirmed', {
            url: '/home',
            views: {
                'tab-home': {
                    templateUrl: 'view/home-confirmed.html',
                    controller: 'PedirMaquinaCtrl'
                }
            }
        })
        .state('tab.message-confirmed', {
            url: '/home/:maqId',
            views: {
                'tab-home': {
                    templateUrl: 'view/message-confirmed.html',
                    controller: 'PedirMaquinaCtrl'
                }
            }
        })
        .state('tab.checkout', {
            url: '/home/ckeckout',
            views: {
                'tab-home': {
                    templateUrl: 'view/request-checkout.html',
                    controller: 'PedirMaquinaCtrl'
                }
            }
        })




        .state('tab.chat', {
            url: '/chat',
            views: {
                'tab-pokemon': {
                    templateUrl: 'view/chat.html',
                    // controller: ''
                }
            }
        })
        .state('tab.voice', {
            url: '/voice',
            views: {
                'tab-config': {
                    templateUrl: 'view/voice.html',
                    // controller: ''
                }
            }
        });
    $urlRouterProvider.otherwise('/tab/home');
});