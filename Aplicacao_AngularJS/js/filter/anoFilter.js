angular.module("AppAnime").filter("anoFilter", function(){
    return function(input){
        return input.toString().substring(2,4);
    };
});