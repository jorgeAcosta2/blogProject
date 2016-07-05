angular.module('blogProjectApp',['ngSanitize'])

.controller('mainCtrl',function($scope,dataService){
    $scope.injectComments = dataService.injectComments;
    dataService.getComments(function(res){
        //var comment = {res.data.user};
        var responseData = res.data.map(function(res){return res});
        console.log(responseData);
        $scope.comments = responseData;
        
    })
})

.service('dataService',function($http){
    var postData;   
    this.getComments = function(cb){
        $http.get('../../../comments')
        .then(cb);
    }
})

.directive('commentlist',function(){
        return{
            templateUrl: '../../../commentlist.html'
        }
})

