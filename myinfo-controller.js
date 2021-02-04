(function() {
    'use strict';

    angular.module('restaurant')
    .controller('MyInfoController', MyInfoController);

    MyInfoController.$inject = ['user'];
    function MyInfoController(user) {
        var ctrl = this;
        ctrl.user = user;
        ctrl.saved = !angular.equals(user, {});

        // console.log('instantiated MyInfoController:', user);

    }
})();