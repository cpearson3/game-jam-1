// Menu state
const MenuState = {

	create: function() {

		Engine.game.camera.reset();

		// Set default background color
		Engine.game.stage.backgroundColor = "#0a0401";

		// Set font size
		let fontSize = Engine.device.type == 'mobile' ? '30px' : '44px';
		
		var titleLabel = Engine.game.add.text(Engine.GAME_WIDTH / 2, 150, 'GamesMeanEverything presents..',{ font: `16px Space Mono`, fill: '#ffffff' })
		titleLabel.anchor.setTo(0.5, 0.5);

		let levelY = 225;
		var levelLabel = Engine.game.add.text(Engine.GAME_WIDTH / 2, levelY, `KING METABOY`,{ font: `${fontSize} Space Mono`, fill: '#ffffff' });
		levelLabel.anchor.setTo(0.5, 0.5);

		// Start Button
		let startY = levelY + 150;
		var startButton = Engine.game.add.sprite(Engine.GAME_WIDTH / 2, startY, 'start')
		startButton.anchor.setTo(0.5, 0.5);
		startButton.alpha = 0.75;
		startButton.inputEnabled = true;
		startButton.input.useHandCursor = true;
		startButton.events.onInputUp.add(this.start, this);
		
		// Create the tween
		Engine.game.add.tween(startButton).to( { alpha: 1 }, 1000, Phaser.Easing.Linear.None, true, 0.75, 500, true);
		// Create a new Phaser keyboard variable: the up arrow key
		var startKey = Engine.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);

		// When the 'upKey' is pressed, it will call the 'start' function once
		startKey.onDown.addOnce(this.start, this);
			
	},
	start: function() {
		Engine.game.time.events.add(500, function() {
			// Start the actual game
			Engine.game.state.start('play');
		});
	}
};

export default MenuState;