import { range } from "../utils";

// Menu state
const MenuState = {

	create: function() {

		Engine.game.camera.reset();

		// Set default background color
		Engine.game.stage.backgroundColor = Engine.backgroundColor;

		// Environment
		this.environment = Engine.game.add.tileSprite(0, 0, Engine.GAME_WIDTH, Engine.GAME_HEIGHT, 'environment');
		this.environment.fixedToCamera = true;
		this.environment.autoScroll(-Engine.SCROLL_SPEED, 0);
		this.environment.tint = 0x111111;

		// create player animation
		this.sprite = Engine.game.add.sprite(Engine.GAME_WIDTH / 2, Engine.GAME_HEIGHT / 2, 'player');
		this.sprite.animations.add('left', range(0,Engine.playerData.frames / 2), Engine.playerData.frameRate, true);
		this.sprite.animations.add('right', range(Engine.playerData.frames / 2, Engine.playerData.frames).reverse(), Engine.playerData.frameRate, true);
		this.sprite.anchor.setTo(0.5, 0.5);
		this.sprite.tint = 0x4d1b02;
		this.sprite.alpha = 0.75;
		this.sprite.scale.setTo(1.5,1.5);
		this.sprite.animations.play("right");

		// Add fire
		let fireStartX = 0;
		let fireInterval = Engine.GAME_WIDTH / 3;

		// Create a loop to space out the emitters
		for (let i=0;i<4;i++) {

			var emitter = Engine.game.add.emitter(fireStartX + i*fireInterval, Engine.GAME_HEIGHT, 500);
			emitter.makeParticles('smoke');

			emitter.setYSpeed(-600, 0);
			// Do the same for the x speed
			emitter.setXSpeed(-500, 500);
			// Use some gravity for the particles
			emitter.gravity = 0;
			emitter.setAlpha(0.9, 0, 3500);
			emitter.setScale(5, 0, 5, 0, 3500);
			
			emitter.start(false, 3500, Engine.game.rnd.integerInRange(100, 200));
		}

		// Add sounds
		this.music = Engine.game.add.audio("menu-music"); // Add the music
		this.music.loop = true; // Make it loop
		this.music.volume = 1;
		this.music.play(); // Start the music
		

		// Set font size
		let fontSize = Engine.device.type == 'mobile' ? '30px' : '44px';
		
		var titleLabel = Engine.game.add.text(Engine.GAME_WIDTH / 2, 150, 'GamesMeanEverything presents..',{ font: `20px Monospace`, fill: '#ffffff' })
		titleLabel.anchor.setTo(0.5, 0.5);

		let levelY = 225;
		var levelLabel = Engine.game.add.text(Engine.GAME_WIDTH / 2, levelY, `METABOY GAME JAM #2`,{ font: `${fontSize} Monospace`, fill: '#ffffff' });
		levelLabel.anchor.setTo(0.5, 0.5);

		// Start Button
		let startY = levelY + 150;
		var startButton = Engine.game.add.sprite(Engine.GAME_WIDTH / 2, startY, 'start')
		startButton.anchor.setTo(0.5, 0.5);
		startButton.alpha = 0.75;
		startButton.inputEnabled = true;
		startButton.input.useHandCursor = true;
		startButton.events.onInputUp.add(this.start, this);

		// Instructions
		let instructionsY = startY + 100;
		var instructionsLabel = Engine.game.add.text(Engine.GAME_WIDTH / 2, instructionsY, `A Left. D Right. SPACE Jumps. MOUSE Shoots `,{ font: `16px Monospace`, fill: '#ffffff' });
		instructionsLabel.anchor.setTo(0.5, 0.5);
		
		// Create the tween
		Engine.game.add.tween(startButton)
			.to( { alpha: 1 }, 1000, Phaser.Easing.Linear.None, true, 0.75, 500, true);
		
		// Create a new Phaser keyboard variable: the up arrow key
		var startKey = Engine.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);

		// When the 'upKey' is pressed, it will call the 'start' function once
		startKey.onDown.addOnce(this.start, this);

		
			
	},
	start: function() {
		Engine.game.time.events.add(500, function() {
			// Start the actual game
			this.music.stop();
			Engine.game.state.start('play');
		}, this);
	}
};

export default MenuState;