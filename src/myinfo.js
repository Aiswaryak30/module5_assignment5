(function () {
    "use strict";

    angular.module('common')
    .service('MyInfoService', MyInfoService);

    MyInfoService.$inject = [];
    function MyInfoService() {
        var service = this;
        service.myInfo = {};

        service.setinfo = function(myInfo) {
            service.myInfo = myInfo;
            // console.log('MyInfoService.setMyinfo() - myInfo:', service.myInfo);
        };

        service.getinfo = function () {
            return service.myInfo;
        };
    }
})();
