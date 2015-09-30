Redwood.controller("SubjectCtrl", ["$rootScope", "$scope", "RedwoodSubject", function($rootScope, $scope, rs) {
	rs.on_load(function() {
		$scope.pointsByPeriod = rs.subject[rs.user_id].points_by_period();
		$scope.pointsByPeriod.shift();
	  $scope.conversionRate = rs.configs[0].conversionRate ? rs.configs[0].conversionRate : 1;
	  $scope.showUpFee = rs.configs[0].showUpFee ? rs.configs[0].showUpFee : 5;
	});
}]);
