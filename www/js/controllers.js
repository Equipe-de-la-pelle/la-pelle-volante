angular.module('starter.controllers', ['starter.services'])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};
  $scope.projectData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('FetchProjects', function($scope, ProjectsService, $http) {
  ProjectsService.index($http).then(function(data) {
    $scope.projects = data.data.data;
  })
})

.controller('SearchProject', function($scope, $stateParams) {
  $scope.searchs = [
    { title: 'Project 1', img: "", short: "le ciel est bleu"},
    { title: 'Project1', img: "", short: "le ballon est bleu"},
  ]
})

.controller('FetchProject', function($scope, $stateParams, ProjectsService, $http) {
  ProjectsService.show($http, parseInt($stateParams.projectId)).then(function(data) {
    $scope.project = data.data.data;
  })
})

.controller('CreateProject', function($scope, $stateParams, ProjectsService, $http, $state) {
  $scope.projectData = {};
  $scope.createProject = function() {
    ProjectsService.create($http, $scope.projectData)
    .then(function(data) {
      $scope.project = data.data.data;
      $state.go('app.projects');
    });
  }
});
