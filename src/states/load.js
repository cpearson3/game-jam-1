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
		Engine.game.load.image('flame-powerup', Engine.BASE_URL+'assets/flame-powerup.png');
		Engine.game.load.image('ice-powerup', Engine.BASE_URL+'assets/ice-powerup.png');
		// UI
		Engine.game.load.image('start', Engine.BASE_URL+'assets/start.png');
		
		// Load spritesheets
		let playerData = Engine.playerData;
		Engine.game.load.spritesheet('player', Engine.BASE_URL+playerData.sprite, playerData.frameWidth, playerData.frameHeight);
		Engine.game.load.spritesheet('boss', Engine.BASE_URL+'assets/boss.png', 483, 357);

		// Load sounds
		Engine.game.load.audio('bg-music', Engine.BASE_URL+'assets/sounds/bg-music.mp3');
		Engine.game.load.audio('boss-music', Engine.BASE_URL+'assets/sounds/boss-music.mp3');
		Engine.game.load.audio('menu-music', Engine.BASE_URL+'assets/sounds/menu-music.mp3');
		Engine.game.load.audio('tank', Engine.BASE_URL+'assets/sounds/tank.mp3');
		Engine.game.load.audio('truck', Engine.BASE_URL+'assets/sounds/truck.mp3');
		Engine.game.load.audio('jet', Engine.BASE_URL+'assets/sounds/jet.mp3');
		Engine.game.load.audio('chopper', Engine.BASE_URL+'assets/sounds/chopper.mp3');
		Engine.game.load.audio('missile', Engine.BASE_URL+'assets/sounds/missile.mp3');
		Engine.game.load.audio('boss', Engine.BASE_URL+'assets/sounds/boss.mp3');
		Engine.game.load.audio('boss-end', Engine.BASE_URL+'assets/sounds/boss-end.mp3');
		Engine.game.load.audio('explode', Engine.BASE_URL+'assets/sounds/explode.mp3');
		Engine.game.load.audio('building', Engine.BASE_URL+'assets/sounds/building.mp3');
		Engine.game.load.audio('flame-powerup', Engine.BASE_URL+'assets/sounds/flame-powerup.mp3');
		Engine.game.load.audio('health-powerup', Engine.BASE_URL+'assets/sounds/health-powerup.mp3');
		Engine.game.load.audio('ice-powerup', Engine.BASE_URL+'assets/sounds/ice-powerup.mp3');
		Engine.game.load.audio('bomb-powerup', Engine.BASE_URL+'assets/sounds/bomb-powerup.mp3');
		Engine.game.load.audio('player-fire', Engine.BASE_URL+'assets/sounds/player-fire.mp3');
		Engine.game.load.audio('player-hit', Engine.BASE_URL+'assets/sounds/player-hit.mp3');
	},

	create: function() {
		// Start the menu state
		Engine.game.state.start('menu');
	}
}

export default LoadState;

