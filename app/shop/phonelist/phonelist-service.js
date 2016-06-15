angular.module('appPhone').service("PhoneService", function ($http, $q) {
    var getPhones = function getPhones() {
        var deferred = $q.defer();
        $http.get('app/shop/phonelist/data/phones.json')
            .then(function (response) {
                deferred.resolve(response.data);
            }, function (error) {
                deferred.resolve([]);
            });
        return deferred.promise;
    }

    return {
        getPhones: getPhones
    }
});