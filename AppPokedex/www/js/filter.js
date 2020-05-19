angular.module("Pokedex").filter("num", function(){
    return function(input){
        var fisrtValue = input.toString(10).substring(0, input.toString().length - 1);
        if (fisrtValue==""){
            fisrtValue="0";
        };
        var lastValue = input.toString(10).substr(-1);
        return fisrtValue + "," + lastValue;
    }
});
