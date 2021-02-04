(function () {
    "use strict";

    angular.module('restaurant')
    .controller('RegController', RegController);

    RegController.$inject = ['MyInfoService', 'MenuService', 'ApiPath'];
    function RegController(MyInfoService, MenuService, ApiPath) {
        var Reg = this;
        Reg.user = {};
        Reg.saved = false;
        Reg.validShortCode = false;
        Reg.itemSearched = false;
        Reg.basePath = ApiPath;

        // console.log('SignupController instantiated');

        Reg.setinfo = function() {
            // console.log('SignupController.setMyinfo()');
            MyInfoService.setinfo(Reg.user);
            Reg.saved = true;
        };

        Reg.validateFavdish = function() {
            Reg.validShortCode = false;
            Reg.itemSearched = false;
            // console.log('in SignupController.validateFavdish():', Reg.user);

            if(typeof Reg.user.menu === 'undefined') {
                Reg.itemSearched=true;
            return;
            }
            if(Reg.user.menu.trim().length <= 0){
                Reg.itemSearched=true;
            return;
            } 

                  MenuService.getMenuItem(Reg.user.menu).then(
                    function(response) {
                            if(response.data.menu_items.length>0){
                                // console.log('SignupController.validateFavdish() :)', response.data);
                                Reg.user.MenuItem = response.data;
                                Reg.validShortCode = true;
                                Reg.itemSearched = true;
                            }
                            
                            else{
                                // console.log('SignupController.validateFavdish() :(', response.data);
                                Reg.itemSearched = true;
                                regForm.$invalid=true;
                            }
                            
                        
                    });
        };

       
    }
})();
