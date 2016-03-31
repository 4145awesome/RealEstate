var real_estate = angular.module('RealEstateBroker',[]);

real_estate.controller('appraisal',function($scope,$http,$window){

	$scope.submit = function () {


		// var APIURL = window.location.href; 		
		var MortID = $scope.mortid;
		var MlsID = $scope.mlsid;
		var name = $scope.name;

		var form= new FormData();
		form.append("mortID",MortID);

		if (MortID == null || MlsID==null || name==null){
			$scope.empty=true;
			$scope.success=false;
		}
		else{
			$scope.empty=false;
			$scope.success=true;

		var settings = "{\"async\":true,\"crossDomain\": true,\"url\": \"https://mun.laboratory.cf/properties/123\",\"method\": \"POST\",\"headers\": {\"cache-control\": \"no-cache\",\"postman-token\": \"1697ec9c-f05e-8efe-6ffe-9c06bb83aca5\"},\"processData\": false,\"contentType\": false,\"mimeType\": \"multipart/form-data\",\"data\": "+form+"}";
		
		$.ajax(settings).done(function (response) {
  			console.log(response);
		});

					// var data = "{\"mordid\":\""+MortID+"\", \"ap_val\":\""+MortID+"\"}";
			// $http.post('https://mun.laboratory.cf/properties').success(function(form, status){

			// 	console.log(data);
			// 	$scope.success=true;

			// }).error(function(status){

			// 	console.log(status);

			// });


		}
	

	}
});
