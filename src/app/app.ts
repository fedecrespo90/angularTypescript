/// <reference path="../../typings/tsd.d.ts" />

module myApp { //se puede llamar myMod o como sea
  'use strict';
  class MyController {
    private name: string;
    static $inject = ['$log'];
    constructor(private $log: angular.ILogService) {
      this.name = 'Brian';
    }
    doSomething() {
      this.$log.info("Doing something");
    }
  }
  angular
    .module('myApp', [])
    .controller('MyController', MyController);
}
