angular.module("AppAnime").directive("uiPreview", function () {
    return {
        templateUrl: "view/preview.html",
        replace: true,
        scope: {
            image: "=",
            video: "="
        },
        link: function(scope, element) {
            var videlement=element.find("video");
            videlement[0].oncanplay = function(){
                scope.viewPreview=true;
                scope.$apply();
            }
            videlement[0].onerror = function() {
                scope.viewPreview=false;
                scope.$apply();
            };
        }
    };
});