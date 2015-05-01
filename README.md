# ng-form-feedback
An AngularJS directive for an interactive form feedback component

## [live demo](https://rawgit.com/fa137/ng-form-feedback/master/index.html) 


### How to install?

nff is really easy to implement to your existing angularjs application. 
* step 1: add the nff file, located under /dist 
	```
    <script src="angular.min.js"></script>
    <script src="ng-form-feedback.js"></script> 
    ```
    there is also minified version
    ```
    <script src="ng-form-feedback.min.js"></script> 
	```
* step 2: inject the directive to your app
	```
    angular.module("example", ['ngFormFeedback'])
    ```
* step 3: add nff directives in your form.
		
    nff-min: minimum characters required for the field
	```
    <form action="">
      <input nff-min="12" type="email">
      <input nff-min="6" type="password">
    </form>
    ```
 * step 4: That's all. enjoy! :) 


### Contact
Shoot me an email <fahim@codexi> or tweet @fahimnur_alam.

