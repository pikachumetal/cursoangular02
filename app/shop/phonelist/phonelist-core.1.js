angular.module("appPhone").controller('PhoneListController', function PhoneListController($scope, PhoneService) {
    PhoneService.getPhones().then(function (data) {
        $scope.phones =data;
    });
    $scope.query = "";
    $scope.queryselector = "1";
    $scope.direccion = true;
    $scope.seeimage = "app/shop/phonelist/templates/phonelist.template.html";
    $scope.add = add;

    function add() {
        $scope.phones.push({
            name: 'Nexus 5',
            snippet: 'Better than Nexus S.',
            price: 620.5324234,
            image: "http://fpoimg.com/350x250",
            imagealt: "Nexus 5 Image"
        });
    }
});