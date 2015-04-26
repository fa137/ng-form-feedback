angular.module("ngFormsFeedback", [])
.directive('nffMin', [function () {

  return {
    restrict: 'A',
    scope: {},
    link: link
  }

}]);
var link = function (scope, elem, attr) {

    init = {
      background_1: "red",
      background_2: "blue",
      background_3: "orange",
      background_4: "green",
      height: 3,
      animation_speed: ".5",
      top: 0
    }

    var styles =  "height:" + init.height+"px;"         +
                  "width: 0%;"         +
                  "display: block;"      +
                  "transition: all" + init.animation_speed +"s;" +
                  "top:"+ init.top +"px;"    +
                  "position: relative;"

    var bar = "<nff-bar style='"+ styles +"'></nff-bar>";
    elem.after(bar);


    elem.bind("keyup", function(event){
      var currentLength = parseInt(elem[0].value.length);
      var minLength = parseInt(attr.nffMin);
      updatedWidth = (currentLength/minLength)*100;
      var background = init.background_1;
      if(updatedWidth>=30) background = init.background_2;
      if(updatedWidth>=60) background = init.background_3;
      if(updatedWidth>=100) background = init.background_4;

      updatedStyles = {
        "background": background,
        "width": updatedWidth + "%"
      }
      if(updatedWidth<=100){
        elem.next().css(updatedStyles);
      }

    });

    // elem[0].outerHTML = "<nff-bar></nff-bar>" + elem[0].outerHTML;
  }