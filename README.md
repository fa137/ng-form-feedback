# ng-form-feedback

An AngularJS directive for an interactive form feedback directive

<img src="/demo.gif" alt="demo" width="700"/>

## [live demo](https://rawgit.com/fa137/ng-form-feedback/master/index.html) 


### How to install?

nff is really easy to implement to your existing or new angularjs application. 
* *step 1*: you can download the ng-form-feedback via bower

	```javascript
	bower install ng-form-feedback
	```
	
	or download from git repository, located inside /dist folder
	and then add the file to your index.html
	
	```javascript
	<script src="angular.min.js"></script>
	<script src="ng-form-feedback.js"></script> 
	```
    
    there is also minified version
    ```javascript
    <script src="ng-form-feedback.min.js"></script> 
    ```
    
    
    
    
* *step 2*: inject the module to your app
	```javascript
    angular.module("example", ['ngFormFeedback'])
    ```
* *step 3*: add nff directives in your form.
		
    ***nff-min***: minimum characters required for the field
	```javascript
    <form action="">
      <input nff-min="12" type="email">
      <input nff-min="6" type="password">
    </form>
    ```
* *step 4*: That's all. enjoy! :) 
 

### Configuration

You can configure nff settings by injecting 'nffSettings' provider inside yourApp.run
```javascript
var exampleApp = angular.module("example", ['ngFormFeedback'])
.run(function (nffSettings) {

/////////////////////////////////////////////////// 
//	configurable options for ng-form-feedback 	//
/////////////////////////////////////////////////
	
	// change the phase colors
	// accepts hex colors and rgb
	nffSettings.phases = {
		1: "#FFB74D",
		2: "red",
		4: "rgb(79, 168, 61)"
	};
	
	// you can also change specific phase
	nffSettings.phases[3] =  "#76FF03";
	
	// height of the feedback bar
	// in pixels
	nffSettings.height = 10;
	
	// animation speed during phase changes
	// in seconds
	nffSettings.speed = 0.3;
	
	// positioning element from top 
	// in pixels
	nffSettings.top = 10;
	
});
```


### Contact

Shoot me an email <fahim@codexi> or tweet @fahimnur_alam.

