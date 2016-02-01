angular.module('hgtApp').controller('postController', ['$scope', '$http', function($scope, $http) {
 		$scope.createPost = function() { 
 			console.log($scope.newPost);
 			$http.post('/api/post', $scope.newPost).success(function(response){
 				$scope.newPost = {};
 				console.log(response);
 			}).error(function(error) {
 				console.log(error);
 			})
 		}
 	}]);