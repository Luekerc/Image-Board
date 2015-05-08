angular.module('app.controllers', [])
.controller('imagesController', function($scope,$http) {
	// $scope.activeWindow=false;
	$scope.HideForm=true;

	$scope.hideForm=function(){
		$scope.HideForm=!$scope.HideForm;
	}

	$scope.image='';
	$scope.caption='';

setInterval(function() {
	$http.get('http://tiny-pizza-server.herokuapp.com/collections/charles-http').success(function(response){
		$scope.messages = [];
		for(var i=0; i < response.length; i++){
			$scope.messages.push(response[i]);
		}
	})
	.error(function(err){
	console.log(err);
	});
}, 1000);

$scope.sendData=function(image,caption){
	var validHttp=false;
	var validCaption=false;

		if(image.substring(0,7)==='http://'||image.substring(0,8)==='https://'){
			validHttp=true;
			console.log('check http is valid');
		}
		if(caption !== ''){
			validCaption = true;
			console.log('check caption is valid');
		}
		if(validCaption === true && validHttp===true){
			$http.post('http://tiny-pizza-server.herokuapp.com/collections/charles-http',{image: image, caption: caption});
			console.log('inputs valid and posted');
		}
};
});




