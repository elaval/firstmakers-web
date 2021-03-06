'use strict';

angular.module('firstMakersApp')
  .controller('MainCtrl', function ($scope,gettextCatalog) {
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
  });
