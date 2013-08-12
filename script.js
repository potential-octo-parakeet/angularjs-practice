var app = angular.module('TestApp',[]);

app.factory('Data',function(){
	return {
		msg: "Hello World! Something changed?"
	}
});

function FirstCtrl($scope,Data){
	$scope.data = Data;
}

function SecondCtrl($scope){

}

function Ctrl1($scope){
	$scope.txt = 'Hello World! Something changed?';
}