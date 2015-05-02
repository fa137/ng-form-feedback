/// <reference path="../typings/angularjs/angular.d.ts"/>
angular.module("ngFormFeedback", [])
  /**
   * lets user configure the nff directive
   * @return {object} provider
   */
  .provider('nffSettings', [function () {
    /**
     * default settings if the user doesn't use nffSettings
     * @type {Object}
     */
    var settings = {
      phases: {
        1: "#EF5350",
        2: "#607D8B",
        3: "#2196F3",
        4: "#4CAF50"
      },
      height: 7,
      speed: .5,
      top: 0
    };
    // the functions below let user to chnage settings
    return {
      /**
       * sets multiple phases of the nff-bar
       * @param {Object} phases
       */
     setPhases: function(phases){
       settings.phases = phases;
       },
    /**
     * sets height of nff-bar
     * @param {Number} height in pixels
     */
     setHeight: function(height){
       settings.height = height;
       },
    /**
     * sets the position of the nff-bar relatively from input field
     * @param {Number} top in pixels
     */
     setTop: function(top){
       settings.top = top;
       },
      /**
       * sets the animation of speed during phases
       * @param {Number} speed in seconds
       */
     setAnimationSpeed: function(speed){
       settings.speed = speed;
       },
     $get: function () {
       return settings;
       }
    };
  }])
  /**
   * directive declaration of nff-min
   * @param  {provider} nffSettings gets the settings from the user
   */
  .directive('nffMin', ['nffSettings', function (nffSettings) {
    var link = function (scope, elem, attr) {
      elem.css("display", "block");
      var bar = elem.find("nff-bar");
      var inputField = elem.find("input");
      /**
       * Moving the attributes from nff-field to input field
       * @param  {string} val    value of the attribute
       * @param  {string} att    attribute of nff-field
       * @return {Object}        modified input field
       */
      angular.forEach(attr, function(val, att){
        if(attr.$attr[att] != undefined){
          inputField.attr(attr.$attr[att], val);
          elem[0].removeAttribute(attr.$attr[att]);
        }
      });
      /**
       * Sets up the bar styles in an object before applying
       * @type {Object}
       */
      var barStyles = {
        "height": nffSettings.height + "px",
        "width": "0px",
        "max-width": inputField[0].offsetWidth - 1 + "px",
        "display": "block",
        "transition": "all " + nffSettings.speed + "s",
        "top": nffSettings.top + "px",
        "position": "relative"
      };

      var currentPhase;
      var phases = nffSettings.phases;
      bar.css(barStyles);
      /**
       * update the nff-bar during keyup event on the input field
       * @param  {Event} event)
       */
      inputField.bind("keyup", function (event) {
        var maxWidth = (inputField[0].offsetWidth - 1);
        var currentLength = parseInt(inputField[0].value.length);
        var minLength = parseInt(attr.nffMin);
        var widthPercentage = (currentLength / minLength) * 100;
        var updatedWidth = (currentLength / minLength) * maxWidth;
        var background = phases[1];
        if (widthPercentage >= 30) background = phases[2];
        if (widthPercentage >= 60) background = phases[3];
        if (widthPercentage >= 100) {
          background = phases[4];
          updatedWidth = maxWidth;
        }
        currentPhase = background;
        var updatedStyles = {
          "background": background,
          "width": updatedWidth + "px"
        };
        bar.css(updatedStyles);
      });
      /**
       * fade out the nff-bar out of phase
       */
      inputField.bind("focus", function(){
        bar.css({"background": currentPhase});
      });
      inputField.bind("focusout", function(){
        bar.css({"background": "transparent"});
      });

    };
    return {
      restrict: 'A',
      scope: {},
      replace: true,
      transclude: 'true',
      template: '<nff-field><input ng-transclude><nff-bar></nff-bar></nff-field>',
      link: link
    };
  }]);