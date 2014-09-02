'use strict';

/**
 * @ngdoc function
 * @name chuitterApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the chuitterApp
 */
angular.module('chuitterApp')
  .controller('MainCtrl', function ($scope) {

  	$scope.saveChueet = function() {

		var ChueetObject = Parse.Object.extend("ChueetObject");
		var chueetObject = new ChueetObject();
		chueetObject.save({chueet: $scope.chueet}).then(function(object) {
		  $scope.getChueet();
		});
		$scope.chueet = null;
  	};

  	$scope.getChueet = function() {

		var ChueetObject = Parse.Object.extend("ChueetObject");
		var query = new Parse.Query(ChueetObject);
		query.descending("createdAt");
		query.find({
		  success: function(results) {
		  	$scope.$apply(function() {
			  	$scope.chueetList = results;
		  	});
		  },
		  error: function(error) {
		    alert("Error: " + error.code + " " + error.message);
		  }
		});
  	};

  	Parse.initialize("cJdsRjIXwbjmT6YhJorm3LJUZqXayohgTZWCtNLS", "GREIdO0Q3K15N7WlRt6IxSNezznsIGlhNffaoakQ");
  	$scope.getChueet();
  });
