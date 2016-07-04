angular.module('blogProjectApp',[])

.controller('mainCtrl',function ($scope,$http){
    
    $scope.saveComment = function(res){
        var data = {
            user: $scope.user,
            comment: $scope.comment
        }        
        var postData = $http.post('../../../index.html',data);
        return console.log(postData);
    }
})

/*
.service('dataService',function($http,$q){
    this.saveComment = function(comments){
        var q = [];
        comments.forEach(function(comment){
            var request;
            if(!comment){
                request = $http.post('../../../index',comment);
            }
            q.push(request);
        });
        $q.all(q).then(function(res){
            console.log("saved: " + comments);
        })
    }
})*/

