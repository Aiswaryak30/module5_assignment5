(function () {
    "use strict";
    
    angular.module('restaurant')
    .component('menuItem', {
      templateUrl: 'menu-item.html',
      bindings: {
        menuItem: '<'
      },
      controller: MenuItemController
    });
    
    
    MenuItemController.$inject = ['ApiPath'];
    function MenuItemController(ApiPath) {
      var $ctrl = this;
      $ctrl.basePath = ApiPath;
    }
    
    })();