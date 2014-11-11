'use strict';

angular.module('firstMakersApp')
  .controller('HeaderController', function ($scope,$location,gettextCatalog) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    this.languageLabels = {
    	'es' : 'Español',
    	'en' : 'English'
    }

    this.selectedLanguage = 'es';

    this.selectLanguage = function(lang) {
    	this.selectedLanguage = lang;
    	gettextCatalog.setCurrentLanguage(lang);
    }

    this.selectLanguage('es');

    $scope.isActive = function (viewLocation) { 
        return viewLocation === $location.path();
    };
  });
