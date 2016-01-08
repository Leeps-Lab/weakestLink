Redwood.controller("SubjectCtrl", ["$rootScope", "$scope", "RedwoodSubject", function($rootScope, $scope, rs) {
	rs.on_load(function() {
		console.log(rs.configs[rs.configs.length - 1].questionnaire);
		if (!rs.configs[rs.configs.length - 1].questionnaire) {
			$("#questionnaire").hide();
			$("#payoff").show();
		}

		$scope.conversionRate = rs.configs[0].conversionRate ? rs.configs[0].conversionRate : 1;
	  $scope.showUpFee = rs.configs[0].showUpFee ? rs.configs[0].showUpFee : 7;
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
