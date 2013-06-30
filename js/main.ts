declare var angular;

angular.module('demoApp',[]);


interface IMainController{
    count:number;
    message:string;
    show:bool;
    inc:()=>void;
    dec:()=>void;
}

class MainController implements IMainController{

    count = 0;
    message: string = 'yeah';
    show:bool = true;

    static $inject = ['$scope'];
    constructor($scope){
        $scope.vm = this;

        // Demo code
        $scope.show = true;
        $scope.message = 'yeah';
    }

    inc(){
       this.count = this.count + 1;
    }
    dec(){
        this.count = this.count - 1;
    }
}


