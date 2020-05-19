angular.module('starter.controllers', [])

  .controller('PokemonCtrl', ['$scope', 'PokeAPI', 'PokemonServiceFactory', '$state', '$ionicLoading', function ($scope, PokeAPI, PokemonServiceFactory, $state, $ionicLoading) {
    $ionicLoading.show();

    PokeAPI.get().then(function (response) {
      if (response && response.data && response.data.results) {
        $scope.listPokemon = response.data.results;
      }
      $ionicLoading.hide();
    });
    $scope.showDetails = function (param) {
      $state.go("tab.pokemon-detail", { pokeId: param });
    };
    $scope.getPokemonIdFromUrl = function (url) {
      return PokemonServiceFactory.getIdPokemon(url);
    };
  }])

  .controller('PokemonDetailCtrl', ['$scope', '$stateParams', 'PokeAPI', 'PokemonServiceFactory', '$ionicPopup', '$ionicModal', '$ionicLoading', function ($scope, $stateParams, PokeAPI, PokemonServiceFactory, $ionicPopup, $ionicModal, $ionicLoading) {
    $ionicLoading.show();
    $scope.PokemonTypes = []
    $scope.PokemonTypesWeaknesses = []
    $scope.PokemonInfo = []
    $scope.listFavorite = PokemonServiceFactory.getListFavorite();
    
    $scope.favorite = function(){
      return $scope.listFavorite.some(function(element){
        return element.id == $scope.PokemonInfo.id;
      });
    }

    PokeAPI.getPokemonFromId($stateParams.pokeId).then(function (response) {
      if (response && response.data) {
        $scope.PokemonInfo = response.data;
        $scope.PokemonInfo.types.forEach(function (element) {
          PokeAPI.getTypeFromIdPokemon(PokemonServiceFactory.getIdType(element.type.url)).then(function (data) {
            $scope.PokemonTypes.push(data.data.damage_relations);
            Array.prototype.push.apply($scope.PokemonTypesWeaknesses, data.data.damage_relations.double_damage_from, data.data.damage_relations.no_damage_to);
          });
        });
        $ionicLoading.hide();
      }
    });

    $scope.addFavorite = function () {
      if ($scope.PokemonInfo.id && $scope.PokemonInfo.name) {
        var pokemonFavorite = PokemonServiceFactory.getListFavorite().findIndex(function(element){
          return element.id == $scope.PokemonInfo.id;
        });
        if (pokemonFavorite==-1) {
          $scope.listFavorite.push({ id: $scope.PokemonInfo.id, name: $scope.PokemonInfo.name });
        }
        else {
          $scope.listFavorite.splice(pokemonFavorite, 1);
        }
        localStorage.setItem('favoritos', JSON.stringify($scope.listFavorite));
      }
      $ionicPopup.alert({
        title: 'Favorito',
        template: 'Foi adicionado aos favoritos'
      }).then(function (res) {
        console.log('Adicionado');
      });
    };

    $ionicModal.fromTemplateUrl('templates/modal-status.html', {
      scope: $scope
    }).then(function (modal) {
      $scope.modal = modal;
    });
  }])

  .controller('ConfigCtrl', function ($scope) {
    $scope.settings = {
      enableFriends: true
    };
  });
