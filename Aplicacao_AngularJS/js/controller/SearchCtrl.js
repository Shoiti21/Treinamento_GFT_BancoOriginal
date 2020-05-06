angular.module("SearchPage",[]);
angular.module("SearchPage").controller("SearchCtrl",['$scope','animeAPI',function($scope,animeAPI){
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
            $scope.resultAnime=data.data.docs;
            $scope.resultAnime.forEach(function(item){
                $scope.setThumbnailResult(animeAPI.getThumbnail("anilist_id=" + item.anilist_id + "&file=" + encodeURIComponent(item.filename) + "&t=" + item.at + "&token=" + item.tokenthumb));
            });
        });
        // animeAPI.getResume($scope.resultAnime[0].anilist_id).then(function(data){
        //     $scope.setResumoResult(data);
        // })
        
    };
}]);