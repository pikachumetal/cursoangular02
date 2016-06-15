angular.module('appPhone',[]).controller('PhoneListController', function PhoneListController($scope, PhoneService) {
    PhoneService.getPhones().then(function (data) {
        $scope.phones =data;
    });
    $scope.query = "";
    $scope.queryselector = "1";
    $scope.direccion = true;
    $scope.seeimage = "app/shop/phonelist/templates/phonelist.image.template.html";
});