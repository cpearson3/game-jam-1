const BootState = {
	preload: function() {
		// Load progress bar
		Engine.game.load.image('progressBar', Engine.BASE_URL+'assets/progressBar.png');
	},
	create: function() {
		// Set some game settings
		Engine.game.physics.startSystem(Phaser.Physics.ARCADE);
		Engine.game.time.advancedTiming = true;

		Engine.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
		Engine.game.scale.setShowAll()
		Engine.game.scale.pageAlignHorizontally = true;
		Engine.game.scale.pageAlignVeritcally = true;
		Engine.game.scale.refresh();

		// Start the load state
		Engine.game.state.start('load');
	}
};

export default BootState;
