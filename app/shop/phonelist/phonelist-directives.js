angular.module('appPhone').directive("phoneList", function () {
    return {
        restrict: "EA",
        replace: 'true',
        templateUrl: "app/shop/phonelist/templates/phonelist.list.template.html",
        //scope: false,
        scope: {
            phones: '=',
            seeimage: '=',
            direccion: '=',
            queryselector: '=',
            query: '=',
            deletePhone : '&'
        },
    };
});