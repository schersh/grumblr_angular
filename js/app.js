"use strict";
// this is an IIFE, and immediately-invoked function expression.(the parentheses at the end call the function immediately) keeps your variables from polluting the global name space and wasting memory
(function(){
  angular
  .module("grumblr", [
    "ui.router",
    "grumbles"
  ])
  .config([
    "$stateProvider",
    "$locationProvider",
    routerFunction
  ]);
  function routerFunction($stateProvider, $locationProvider){
    $locationProvider.html5Mode(true);
    $stateProvider
    .state("grumbleIndex", {
      url: "/grumbles",
      templateUrl: "js/grumbles/index.html",
      controller: "GrumbleIndexController",
      controllerAs: "GrumbleIndexViewModel"
    })
    .state("grumbleShow", {
      url: "/grumbles/:id",
      templateUrl: "js/grumbles/show.html",
      controller: "GrumbleShowController",
      controllerAs: "GrumbleShowViewModel"
    });
  }
}());
