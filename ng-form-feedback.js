/// <reference path="typings/angularjs/angular.d.ts"/>
angular.module("ngFormFeedback", [])
  .provider('nffSettings', [function () {
    var settings = {
      phases: {
        1: "darkred",
        2: "blue",
        3: "orange",
        4: "green"
      },
      height: 7,
      speed: .5,
      top: 0
    };
    return {
     setPhases: function(phases){
       settings.phases = phases;
       },
     setHeight: function(height){
       settings.height = height;
       },
     setTop: function(top){
       settings.top = top;
       },
     setAnimationSpeed: function(speed){
       settings.speed = speed;
       },
     $get: function () {
       return settings;
       } 
    };
  }])
  .directive('nffMin', ['nffSettings', function (nffSettings) {
    var link = function (scope, elem, attr) {  	 
      var barStyles = {
        "height": nffSettings.height + "px",
        "width": "0%",
        "display": "block",
        "transition": "all " + nffSettings.speed + "s",
        "top": nffSettings.top + "px",
        "position": "relative"
      };
      
      var phases = nffSettings.phases;
      var bar = angular.element("<nff-bar></nff-bar>");
      bar.css(barStyles);
      elem.after(bar);
    
    
      elem.bind("keyup", function (event) {
        var currentLength = parseInt(elem[0].value.length);
        var minLength = parseInt(attr.nffMin);
        var updatedWidth = (currentLength / minLength) * 100;

        var background = phases[1];
        if (updatedWidth >= 30) background = phases[2];
        if (updatedWidth >= 60) background = phases[3];
        if (updatedWidth >= 100) background = phases[4];
    
        var updatedStyles = {
          "background": background,
          "width": updatedWidth + "%"
        };
    
        // this prevents the nffbar to overextend the width of input field.
        if (updatedWidth <= 100) {
          elem.next().css(updatedStyles);
        }
    
      });
    };
    return {
      restrict: 'A',
      scope: {},
      link: link
    };
  }]);