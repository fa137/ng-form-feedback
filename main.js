var exampleApp = angular.module("example", ['ngFormFeedback'])
.run(function (nffSettings) {
/////////////////////////////////////////////////// 
//	configurable options for ng-form-feedback 	//
/////////////////////////////////////////////////
	
//	change the phase colors
//	accepts hex colors and rgb
//	nffSettings.phases = {
//		1: "#FFB74D",
//		2: "red",
//		4: "rgb(79, 168, 61)"
//	};
	
//	you can also change specific phase
//	nffSettings.phases[3] =  "#76FF03";
	
//	height of the feedback bar
//	in pixels
//	nffSettings.height = 10;
	
//	animation speed during phase changes
//	in seconds
//	nffSettings.speed = 0.3;
	
//	positioning element from top 
//	in pixels
//	nffSettings.top = 10;
	
});