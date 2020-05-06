angular.module("SearchPage").service("animeAPI", ['$http', 'config', function ($http, config) {
    this.getAnime = function (paramsSearch) {
        return $http.post(config.baseURL + "api/search", paramsSearch);
    }
    this.getThumbnail=function(paramsSearch){
        return config.baseURL + "thumbnail.php?" + paramsSearch;
    }
    this.getResume=function(paramsSearch){
        return $http.post(config.resumeURL, {variables:paramsSearch})
    }
}]);