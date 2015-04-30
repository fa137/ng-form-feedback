/* global inject */
/// <reference path="../typings/angularjs/angular.d.ts"/>
/// <reference path="../typings/jasmine/jasmine.d.ts"/>
describe('nff', function() {
  // setup
  var $compile, $rootScope;
  beforeEach(module("example"));
  beforeEach(inject(function(_$compile_, _$rootScope_){
    $compile = _$compile_;
    $rootScope = _$rootScope_;;
  }));
  
  var form = 
  '<form action="">'+
  'Test:<input nff-min="17" type="text">'+
  '</form>';
  
  it("should add nff-bar to the form inputs", function(){
    var elem = $compile(form)($rootScope);
    $rootScope.$digest();
    expect(elem.html()).toContain("nff-bar"); 
  });
  
  it("should compare to bar width", function() {
    form = $compile(form)($rootScope);
    angular.element(document).find('body').append(form);    
    var elem = angular.element(document).find("form");
    // nffMin should be same as the one defined in form above
    var nffMin = 17, currentLength;
    var inputField = elem.find("input");
    var nffBar = elem.find("nff-bar");
    
    var checkWidth = function (inputVal){
      inputField.val(inputVal);
      inputField.triggerHandler("keyup");
      
      currentLength = inputField[0].value.length; 
      var inputFieldWidth = inputField[0].offsetWidth - 1;
      var widthOfnffBar = parseInt(nffBar.css("width"));
      var widthShouldBe = Math.floor(inputFieldWidth * (currentLength/nffMin));
      widthShouldBe = widthShouldBe>inputFieldWidth ? inputFieldWidth : widthShouldBe;
      expect(widthOfnffBar).toBe(widthShouldBe);
    };
    
    checkWidth("test123456test123456");
    checkWidth("test123456test12");
    checkWidth("test123");
    checkWidth("");
    
  });
  
});