// Load State
const LoadState = {
	preload: function() {
		// Add a 'loading...' label on the screen
		var loadingLabel = Engine.game.add.text(Engine.game.world.centerX, 150, 'loading...',	{ font: '30px Space Mono', fill: '#ffffff' });
		loadingLabel.anchor.setTo(0.5, 0.5);
		// Display the progress bar
		var progressBar = Engine.game.add.sprite(Engine.game.world.centerX, 200, 'progressBar');
		progressBar.anchor.setTo(0.5, 0.5);
		Engine.game.load.setPreloadSprite(progressBar);

		// load all game assets
		Engine.game.load.image('pixel', Engine.BASE_URL+'assets/red_particle.png');
		Engine.game.load.image('bullet', Engine.BASE_URL+'assets/bullet.png');
		Engine.game.load.image('smoke', Engine.BASE_URL+'assets/smoke.png');
		Engine.game.load.image('dust', Engine.BASE_URL+'assets/dust.png');
		Engine.game.load.image('puff', Engine.BASE_URL+'assets/puff.png');
		Engine.game.load.image('yellow-star', Engine.BASE_URL+'assets/yellow-star.png');
		Engine.game.load.image('projectile', Engine.BASE_URL+'assets/projectile.png');
		Engine.game.load.image('blue-flame',Engine.BASE_URL+'assets/blue-flame.png');
		
		Engine.game.load.image('environment', Engine.backgroundImage);
		
		// Buildings
		Engine.game.load.image('building-deco', Engine.BASE_URL+'assets/building-deco.png');
		Engine.game.load.image('pyramid-tower', Engine.BASE_URL+'assets/pyramid-tower.png');
		Engine.game.load.image('small-building', Engine.BASE_URL+'assets/small-building.png');
		Engine.game.load.image('tower-clock', Engine.BASE_URL+'assets/tower-clock.png');
		Engine.game.load.image('small-tower', Engine.BASE_URL+'assets/small-tower.png');
		Engine.game.load.image('warehouse', Engine.BASE_URL+'assets/warehouse.png');
		// Enemies
		Engine.game.load.image('truck',Engine.BASE_URL+'assets/truck.png');
		Engine.game.load.image('tank',Engine.BASE_URL+'assets/tank.png');
		Engine.game.load.image('chopper',Engine.BASE_URL+'assets/chopper-1.png');
		Engine.game.load.image('jet',Engine.BASE_URL+'assets/jet.png');
		Engine.game.load.image('missile', Engine.BASE_URL+'assets/missile.png');
		Engine.game.load.image('missile-vertical', Engine.BASE_URL+'assets/missile-vertical.png');
		
		// Power up
		Engine.game.load.image('bomb-powerup', Engine.BASE_URL+'assets/bomb-powerup.png');
		Engine.game.load.image('health-powerup', Engine.BASE_URL+'assets/health-powerup.png');
		// UI
		Engine.game.load.image('start', Engine.BASE_URL+'assets/start.png');
		
		// Load spritesheets
		let playerData = Engine.playerData;
		Engine.game.load.spritesheet('player', Engine.BASE_URL+playerData.sprite, playerData.frameWidth, playerData.frameHeight);
		Engine.game.load.spritesheet('boss', Engine.BASE_URL+'assets/boss.png', 483, 483);
		// create graphics textures
		Engine.textures = {};
		let projectileGraphic = this.make.graphics({x: 0, y: 0, add: false});
		projectileGraphic.beginFill(0xb8c4d4);
		projectileGraphic.drawCircle(0, 0, 75);
		projectileGraphic.endFill();
		
		Engine.textures.projectile = projectileGraphic.generateTexture();

		// Sound when the player jumps
		// Engine.game.load.audio('jump', Engine.BASE_URL+'assets/sounds/jump.mp3');
		// Sound when the player dies
		// Engine.game.load.audio('dead', Engine.BASE_URL+'assets/sounds/dead.mp3');
		// Engine.game.load.audio('crash', Engine.BASE_URL+'assets/sounds/crash.mp3');
		// Engine.game.load.audio('zombie1', Engine.BASE_URL+'assets/sounds/zombie.mp3');
		// Engine.game.load.audio('zombie2', Engine.BASE_URL+'assets/sounds/zombie-2.mp3');
		// Engine.game.load.audio('zombie3', Engine.BASE_URL+'assets/sounds/zombie-3.mp3');
		// Engine.game.load.audio('ghost', Engine.BASE_URL+'assets/sounds/seeking.mp3');

		// Load the music
		// Engine.game.load.audio('playMusic', Engine.backgroundMusic);
	},

	create: function() {
		// Start the menu state
		Engine.game.state.start('menu');
	}
}

export default LoadState;

