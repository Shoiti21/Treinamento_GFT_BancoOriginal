angular.module("AppAnime").service("animeAPI", ['$http', 'config', function ($http, config) {
    this.getAnime = function (paramsSearch) {
        return $http.post(config.baseURL + "api/search", paramsSearch);
    }
    this.getThumbnail=function(paramsSearch){
        return config.baseURL + "thumbnail.php?" + paramsSearch;
    }
    this.getResumeMyAnimeList=function(paramsSearch){
        return $http.get(config.resumeURL + paramsSearch);
    }
    this.getVideoPreview=function(paramsSearch){
        return config.baseURL + "preview.php?" + paramsSearch;
    }
}]);