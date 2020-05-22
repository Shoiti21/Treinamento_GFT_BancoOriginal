angular.module('AppMaquina').controller("PedirMaquinaCtrl", ['$scope', '$state', '$stateParams', '$ionicPopup', 'configValue', function ($scope, $state, $stateParams, $ionicPopup,configValue) {
    $scope.maquininhas = configValue.maquininhas;
    $scope.conditions = configValue.conditions;
    $scope.selectedMaquininha = false;

    if ($stateParams.maqId){ // set do Id maquina *provisório
        configValue.maquinaId = $stateParams.maqId;
    } 
    if (configValue.maquinaId){ // set da maquina escolhida *provisório
        $scope.confirmedMaquina = $scope.maquininhas.filter(function(value){
            return value.id == configValue.maquinaId;
        })
    }
    $scope.check = function (param) {   //abrir o footer de confirmação
        $scope.selectedMaquininha = true;
        $scope.confirmedMaquinaId = param;
    }
    $scope.uncheck = function () {   //fechar o footer de confirmação
        $scope.selectedMaquininha = false;
        $scope.confirmedMaquinaId = null;
        $scope.confirmedMaquina = null;
    }

    $scope.confirmed = function (param) {
        if ($scope.confirmedMaquinaId != null) {
            $state.go("tab.message-confirmed", { maqId: param });
        }
    };
    $scope.backConfirmed = function () {
        $state.go("tab.home-confirmed");
    }
    $scope.home = function () {
        configValue.maquinaId = null;
        $scope.confirmedMaquinaId = null;
        $state.go("tab.home");
    }
    $scope.checkout = function () {
        $state.go("tab.checkout");
        console.log("finalizada!")
    }

    $scope.showPopupConfirmed = function () {
        var PopupConfirmed = $ionicPopup.show({
            templateUrl: 'view/popup-confirmed.html',
            title: '<div class="popup-bar-color"></div>',
            scope: $scope
        })
        $scope.closePopupConfirmed = function () {
            PopupConfirmed.close(); //close the popup after 3 seconds for some reason
        };
        $scope.canceledPopupConfirmed = function () {
            PopupConfirmed.close();
            $state.go("tab.home");
        }
    };
}]);
