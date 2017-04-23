var app = angular.module('app')
    .controller('shellCtrl', function (Auth, $rootScope, $state) {
        var self = this;

        $rootScope.$on('openSidebar', function () {
            if (self.showSidebar) return;
            self.showSidebar = true;
        })

        $rootScope.$on('closeSidebar', function () {
            if (!self.showSidebar) return;
            self.showSidebar = false;
        })

        $rootScope.$on('toggleSidebar', function () {
            self.showSidebar = !self.showSidebar;
        })

        self.signOut = function () {
            Auth.$signOut();
            $state.go('start');
            self.showSidebar = false;
        }

        // todo : animate sidebar collapse
        self.showSidebar = false;
    });