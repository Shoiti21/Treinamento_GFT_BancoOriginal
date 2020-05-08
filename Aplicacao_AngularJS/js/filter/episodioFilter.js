angular.module("AppAnime").filter("episodioFilter", function(){
    return function(input){
        if(input>100){
            return ">100";
        }
        else if(input<100){
            return "<100";
        }
        else{
            return 100;
        }
    };
});