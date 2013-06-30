angular.module('demoApp', []);

var MainController = (function () {
    function MainController($scope) {
        this.count = 0;
        this.message = 'yeah';
        this.show = true;
        $scope.vm = this;

        $scope.show = true;
        $scope.message = 'yeah';
    }
    MainController.prototype.inc = function () {
        this.count = this.count + 1;
    };
    MainController.prototype.dec = function () {
        this.count = this.count - 1;
    };
    MainController.$inject = ['$scope'];
    return MainController;
})();
//@ sourceMappingURL=main.js.map
