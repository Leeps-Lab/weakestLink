Redwood.controller("SubjectCtrl", ["$rootScope", "$scope", "RedwoodSubject", function($rootScope, $scope, rs) {
	rs.on_load(function() {
		if (!rs.configs[0].questionnaire) {
			$("#questionnaire").hide();
			$("#payoff").show();
		}

		$scope.conversionRate = !isNaN(rs.configs[0].conversionRate) ? rs.configs[0].conversionRate : 0.7;
	  $scope.showUpFee = !isNaN(rs.configs[0].showUpFee) ? rs.configs[0].showUpFee : 7;

		$scope.total = $rootScope.totalPoints / ($rootScope.period - 1) * $scope.conversionRate + $scope.showUpFee;

    rs.trigger("sendfinalearnings", {
      average : $rootScope.totalPoints / ($rootScope.period - 1) || 0,
			conversionRate : $scope.conversionRate || 0,
			showUpFee : $scope.showUpFee || 0,
			total : $scope.total
    });
	});
	$scope.submitquestionnaire = function() {
		rs.trigger("questionnaireanswers", {
			age: $("#age").val(),
			student: $("#student").val(),
			fieldofstudy: $("#fieldofstudy").val(),
			gender: $("#gender").val()
		});
		$("#questionnaire").hide();
		$("#payoff").show();
	};
}]);
