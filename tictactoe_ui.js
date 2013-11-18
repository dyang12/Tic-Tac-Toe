(function (root) {

  var TTT = root.TTT = (root.TTT || {});

	var UI = TTT.UI = function(game) {
		this.game = game;

	}

	UI.prototype.renderAndBind = function() {
		var ui = this;
		// console.log(game);
		$('div.board').on('click', 'div', function (e) {

			if(!ui.game.winner()) {

				var $target = $(e.target);
				var row = parseInt($target.data('row'));
				var col = parseInt($target.data('col'));

				if(ui.game.isEmptyPos([row, col])) {

					if(ui.game.player === 'X') {
						$target[0].className = "playerX";
					} else {
						$target[0].className = "playerO";
					}

					ui.game.move([row, col]);

					if(ui.game.winner()) {
						ui.game.switchPlayer();
						$('div.winner').html('<h2>Player ' + ui.game.player + ' wins!</h2>')

					}

				}
			}
		});
	}

})(this);

$(document).ready( function() {
	game = new TTT.Game();
	ui = new TTT.UI(game);
	ui.renderAndBind();
})


//TTTUI
	//
	// $('div.board').on('click', function (event) {
	// 	var target = $(event.target)
	// 	var row = target.data('row'), col = target.data('col');
	// 	this.game.mark([row, col]);
	// 	// make the target blue
	// });


	//
	// $(function () {
	// 	new Game
	// 	new UI(game)
	// 	ui.renderAndBind();
	// })