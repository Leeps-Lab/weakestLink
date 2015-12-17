Redwood.controller("SubjectCtrl", ["$rootScope", "$scope", "RedwoodSubject", function($rootScope, $scope, rs) {
	rs.on_load(function() {

		if (!rs.config.displayInstruction) rs.next_period();
		else $('#instruction').show();
		var beta = 1;
		$('.beta').text(beta);

		// Util Functions
		var minX = function (pos) {
			var m = 10;
			for (var i in pos)
				if (pos[i] < m) m = pos[i];
			return m;
		};
		var payoff = function (pos, posAll) {
			return minX(posAll) - beta * (pos - minX(posAll));
		};

		// Question and Solution Generation
		var pPos1 = [], pPos2 = [], solution = [], correct = [];
		for (var i = 0; i < 4; i++) {
			pPos1[i] = Math.round(Math.random()*9)+1;
			if (i == 2) {
				do pPos2[i] = Math.round(Math.random()*9)+1
				while (pPos2[2] == pPos1[2])
			} else pPos2[i] = pPos1[i];
			$('#p'+i).text(pPos1[i]);
		}
		$('#v1').text(pPos2[2]);
		$('#v2').text(pPos1[2]);
		$('.M').text(minX(pPos1));

		$('.examplePlayer').text(pPos1[1]);
		$('.examplePayoff').text(payoff(pPos1[1], pPos1));
		solution[0] = pPos1[0] - minX(pPos1);
		solution[1] = payoff(pPos1[0], pPos1);
		solution[2] = payoff(pPos1[2], pPos1);
		solution[3] = payoff(pPos2[2], pPos2);

		$('.answer').keyup(function (e) {
			var index = this.id.split('a')[1];
			if (solution[index] == parseFloat(this.value) && (this.value != '')) {
				$('#m'+index).text('correct');
				correct[index] = true;
			} else if (this.value != "-") {
				$('#m'+index).text('incorrect');
			}
			for (var i = 0; i < 4; i++)	if (!correct[i]) return;
			rs.next_period();
		});

		console.log("Cheat sheet:", solution);
	});
}]);
