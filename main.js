angular.module("sample", ['ngFormFeedback'])
.run(function (nffSettings) {
	nffSettings.phases[4] = "black";
});