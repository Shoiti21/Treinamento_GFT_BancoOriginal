angular.module("AppAnime").controller("SearchCtrl",['$scope','animeAPI',function($scope,animeAPI){
    $scope.image=null;
    $scope.resultAnime=[];
    /*$scope.imageIsLoaded = function (e) {
        $scope.$apply(function () {
            $scope.image = e.target.result;            
        });
    }*/
    $scope.onImgSelected=function(evento){
        var reader = new FileReader();
        //reader.onload = $scope.imageIsLoaded;
        reader.onload=function(){
            $scope.$apply(function () {
                $scope.image = reader.result;  
                $scope.setImagePreview(reader.result);          
            });
        }
        reader.readAsDataURL(evento);
    };

    $scope.SearchImgSelected=function(){
        animeAPI.getAnime({image: $scope.image}).then(function(data){
            $scope.arrayThumb=[];
            $scope.resultAnime=data.data.docs;
            $scope.setAllAnimeResult($scope.resultAnime);
            $scope.resultAnime.forEach(function(item){
                $scope.arrayThumb.push(animeAPI.getThumbnail("anilist_id=" + item.anilist_id + "&file=" + encodeURIComponent(item.filename) + "&t=" + item.at + "&token=" + item.tokenthumb));
            });
            $scope.setThumbnailResult($scope.arrayThumb);
            animeAPI.getResumeMyAnimeList($scope.resultAnime[0].mal_id).then(function(data){
                $scope.setResumoResult(data.data);
            });
            $scope.setVideoPreview(animeAPI.getVideoPreview("anilist_id=" + $scope.resultAnime[0].anilist_id + "&file=" + encodeURIComponent($scope.resultAnime[0].filename) + "&t=" + $scope.resultAnime[0].at + "&token=" + $scope.resultAnime[0].tokenthumb));   
        });
    };
    $scope.SelectedResult=function(result){
        animeAPI.getResumeMyAnimeList(result.mal_id).then(function(data){
            $scope.setResumoResult(data.data);
        });
        $scope.setVideoPreview(animeAPI.getVideoPreview("anilist_id=" + result.anilist_id + "&file=" + encodeURIComponent(result.filename) + "&t=" + result.at + "&token=" + result.tokenthumb));   
    }
}]);