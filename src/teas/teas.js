import angular from 'angular';
import { MODULE_NAME } from '../config'

const module = angular.module(MODULE_NAME)
    .controller('TeasCtrl', function (Restangular) {

        var teas = Restangular.all('teas');

        teas.getList().then((teas) => {
            this.teas = teas;
        });

        this.orderProp = 'name';
    })

module.config(function ($routeProvider) {
    $routeProvider.when('/teas', {
        template: require('./teas.html'),
        controller: 'TeasCtrl',
        controllerAs: 'teas'
    })
})
