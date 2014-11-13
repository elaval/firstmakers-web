/**
 * Created by eDelgado on 12-11-14.
 */
angular.module('firstMakersApp')
.controller('FooterCtrl', function($scope){
        $scope.year = new Date().getFullYear();
});