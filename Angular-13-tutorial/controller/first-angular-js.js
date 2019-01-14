
// JS file that contains all of the angular code for the controller
var mainApp = angular.module( "mainApp", [] );

mainApp.controller( "studentController", function( $scope ) {
    $scope.student = { 
            firstName: "Katherine",
            lastName: "Wily",

            fullName: function() {
                var studentObject;
                studentObject = $scope.student;
                return studentObject.firstName + " " + studentObject.lastName;
            }
    };
});