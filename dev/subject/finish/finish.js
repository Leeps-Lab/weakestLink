Redwood.controller("SubjectCtrl", ["$rootScope", "$scope", "RedwoodSubject", function($rootScope, $scope, rs) {
	rs.on_load(function() {
		console.log(rs.configs[rs.configs.length - 1].questionnaire);
		if (!rs.configs[rs.configs.length - 1].questionnaire) {
			$("#questionnaire").hide();
			$("#payoff").show();
		}

		$scope.conversionRate = rs.configs[0].conversionRate ? rs.configs[0].conversionRate : 1;
	  $scope.showUpFee = rs.configs[0].showUpFee ? rs.configs[0].showUpFee : 7;

    rs.trigger("sendfinalearnings", {
      average : $rootScope.totalPoints / ($rootScope.period - 1) || 0,
			conversionRate : $scope.conversionRate || 0,
			showUpFee : $scope.showUpFee || 0,
			total : $rootScope.totalPoints / ($rootScope.period - 1) * $scope.conversionRate + $scope.showUpFee
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
