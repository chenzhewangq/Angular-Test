jckf.config(function($stateProvider, $urlRouterProvider) {
	// $urlRouterProvider.otherwise("/main");
	$stateProvider
		.state('main', {
			url: "/main",
			templateUrl: "views/main.html"
		})
		.state('projectManage', {
			// abstract: true, 
			url: "/projectManage",
			templateUrl: "views/project_management/project_management.html"
		})
		.state('projectManage.devUnitTest', {
			url: "/devUnitTest",
			templateUrl: "views/project_management/develop_management/unit_test.html"
		})
});