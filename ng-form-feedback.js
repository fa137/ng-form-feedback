/// <reference path="typings/angularjs/angular.d.ts"/>
angular.module("ngFormFeedback", ['ngFormsFeedback.settings'])
  .directive('nffMin', [function () {
  return {
    restrict: 'A',
    scope: {},
    link: link
  };

}]);
var link = function (scope, elem, attr) {

  var init = {
    background_1: "darkred",
    background_2: "blue",
    background_3: "orange",
    background_4: "green",
    height: 7,
    animation_speed: ".5",
    top: 0
  };

  var barStyles = {
    "height": init.height + "px",
    "width": "0%",
    "display": "block",
    "transition": "all" + init.animation_speed + "s",
    "top": init.top + "px",
    "position": "relative"
  };

  var bar = angular.element("<nff-bar></nff-bar>");
  bar.css(barStyles);
  elem.after(bar);


  elem.bind("keyup", function (event) {
    var currentLength = parseInt(elem[0].value.length);
    var minLength = parseInt(attr.nffMin);
    var updatedWidth = (currentLength / minLength) * 100;
    var background = init.background_1;
    if (updatedWidth >= 30) background = init.background_2;
    if (updatedWidth >= 60) background = init.background_3;
    if (updatedWidth >= 100) background = init.background_4;

    var updatedStyles = {
      "background": background,
      "width": updatedWidth + "%"
    }

    // stop updating styles after we reach our goal
    if (updatedWidth <= 100) {
      elem.next().css(updatedStyles);
    }

  });

};

angular.module('ngFormsFeedback.settings', [])
  .value("test", "testtty");