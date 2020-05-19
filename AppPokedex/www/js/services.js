angular.module('starter.services', [])

  .service('PokeAPI', ['$http', function ($http) {
    this.get = function () {
      return $http.get('https://pokeapi.co/api/v2/pokemon/');
    }
    this.getPokemonFromId = function (param) {
      return $http.get('https://pokeapi.co/api/v2/pokemon/' + param);
    }
    this.getTypeFromIdPokemon = function (param) {
      return $http.get('https://pokeapi.co/api/v2/type/' + param)
    }
  }])
  .factory('PokemonServiceFactory', [function () {
    function IdPokemonFromUrl(url) {
      var id = 0;
      if (url) {
        var urlSplit = url.split("/pokemon");
        if (urlSplit[1]) {
          id = urlSplit[1].replace(/\//g, "");
        }
      }
      return id;
    };
    function IdTypeFromUrl(url) {
      var id = 0;
      if (url) {
        var urlSplit = url.split("/type");
        if (urlSplit[1]) {
          id = urlSplit[1].replace(/\//g, "");
        }
      }
      return id;
    };
    function ListFavorite() {
      return localStorage.getItem('favoritos') ? JSON.parse(localStorage.getItem('favoritos')) : [];
    }

    return {
      getIdPokemon: IdPokemonFromUrl,
      getIdType: IdTypeFromUrl,
      getListFavorite: ListFavorite
    };
  }]);