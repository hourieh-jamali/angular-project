(function () {
'use strict';

angular.module('DIApp', [])
.controller('DIController', DIController);
DIController.$inject = ['$scope'];
function DIController ($scope) {
  $scope.name = "";

  $scope.showDiv = function () {
    var input=$scope.name.split(',');
     var result=0;
     for(var i=0;i<input.length;i++){
       var char=input[i].trim();
       if(!char=="")
          result+=1;
     }
     if(result==0){
     $scope.outPut="Please enter data first";
   }
     else if (result<=3) {
        $scope.outPut="Enjoy!";
       }
       else {
         $scope.outPut="Too much!";
       }
   };
}



})();
