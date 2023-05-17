// play state
import Particles from '../objects/particles';

import Player from '../objects/player'
import Buildings from '../objects/buildings';
import Vehicles from '../objects/vehicles';
import Powerups from '../objects/powerups';
import Missiles from '../objects/missiles';


const PlayState = {
	create: function() {	
		
		Engine.score = 0;

		// set campaign background color
		Engine.game.stage.backgroundColor = Engine.backgroundColor;

		// add jump Sound
		// Engine.sounds["jump"] = Engine.game.add.audio('jump');
		// // Engine.sounds["shoot"] = Engine.game.add.audio('shoot');
		// Engine.sounds["dead"] = Engine.game.add.audio('dead');
		// Engine.sounds["crash"] = Engine.game.add.audio('crash');
		// Engine.sounds["zombie1"] = Engine.game.add.audio('zombie1');
		// Engine.sounds["zombie1"].allowMultiple = false;
		// Engine.sounds["zombie2"] = Engine.game.add.audio('zombie2');
		// Engine.sounds["zombie2"].allowMultiple = false;
		// Engine.sounds["zombie3"] = Engine.game.add.audio('zombie3');
		// Engine.sounds["zombie3"].allowMultiple = false;
		// Engine.sounds["ghost"] = Engine.game.add.audio('ghost');
		// Engine.sounds["ghost"].allowMultiple = false;

		// Environment
		this.environment = Engine.game.add.tileSprite(0, 0, Engine.GAME_WIDTH, Engine.GAME_HEIGHT, 'environment');
		this.environment.fixedToCamera = true;
		this.environment.autoScroll(-Engine.SCROLL_SPEED, 0);

		// create player
		Engine.player = new Player();
		Engine.player.sprite.animations.play(Engine.player.facing);
		
		Engine.game.camera.reset();
		Engine.game.camera.follow(Engine.player.sprite, Phaser.Camera.FOLLOW_PLATFORMER);
		
		// Add groups for buildings and enemies
		
		this.vehicles = new Vehicles;
		this.buildings = new Buildings;

		// Powerup group
		this.powerups = new Powerups;

		// Missiles
		this.missiles = new Missiles;

		// Set up Particle emitter functions
		Engine.particles = new Particles;

		// add healthbar
		this.healthBar = Engine.game.add.graphics(8, 8);
		this.healthBar.fixedToCamera = true;
		this.drawHealthBar();
		
		// create score text
		this.gameText = Engine.game.add.text(10, 10, '0', { font: "18px Monospace", fill: "#ffffff", align: "left" });
		this.gameText.fixedToCamera = true;

		this.scoreText = Engine.game.add.text( Engine.game.camera.width - 160, 10, '0', { font: "18px Monospace", fill: "#ffffff", align: "left" });
		this.scoreText.fixedToCamera = true;

		// create cursor keys (up down left right)
		this.input = {
			// cursor:  Engine.game.input.keyboard.createCursorKeys(),
			left: Engine.game.input.keyboard.addKey(Phaser.Keyboard.A),
			right: Engine.game.input.keyboard.addKey(Phaser.Keyboard.D),
			jump: Engine.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR),
		};

		// START THE TIMER! 
		Engine.levelTime = 0;
		this.levelTimer = Engine.game.time.create(false);
		this.levelTimer.loop(100, function() {
			Engine.levelTime += 0.1;

			if (Engine.player.alive) {
				Engine.score += 1;
			}
			
		}, this);
		this.levelTimer.start();
	},
	drawHealthBar: function() {

		var maxWidth = Engine.game.camera.width - 16;
		var height = 32;
		var width = maxWidth * ( Engine.player.health / 100 );

		this.healthBar.clear();

		if (width > 0) {
			this.healthBar.beginFill(0x700d00, 0.5);
			this.healthBar.lineStyle(2, 0x4a0c04, 0.8);
		
			this.healthBar.moveTo(0, 0);
			this.healthBar.lineTo(width, 0);
			this.healthBar.lineTo(width, height);
			this.healthBar.lineTo(0, height);
			this.healthBar.lineTo(0, 0);
		
			this.healthBar.endFill();
		}
	},
	update: function() {

		if (Engine.gameMode == Engine.GAME_MODES.RUN) {
			// Check group collisions with player / objects / projectiles
			// Player and objects
			Engine.game.physics.arcade.overlap(Engine.player.sprite, this.buildings.group, this.hitPlayerBuldings, null, this);
			Engine.game.physics.arcade.overlap(Engine.player.sprite, this.vehicles.group, this.hitPlayerVehicles, null, this);
			Engine.game.physics.arcade.overlap(Engine.player.sprite, this.missiles.group, this.hitPlayerMissiles, null, this);
			// Player projectiles and objects
			Engine.game.physics.arcade.overlap(Engine.player.projectiles, this.vehicles.group, this.hitProjectilesObjects, null, this);
			Engine.game.physics.arcade.overlap(Engine.player.projectiles, this.buildings.group, this.hitProjectilesObjects, null, this);
			Engine.game.physics.arcade.overlap(Engine.player.projectiles, this.missiles.group, this.hitProjectilesObjects, null, this);
			// Player Powerups
			Engine.game.physics.arcade.overlap(Engine.player.sprite, this.powerups.group, this.hitPlayerPowerups, null, this);

			// Enemy projectiles
			Engine.game.physics.arcade.overlap(Engine.player.sprite, this.vehicles.projectiles, this.hitPlayerEnemyProjectiles, null, this);
		
			
			

			// update enemies
			this.vehicles.update();

			// update buildings
			this.buildings.update();

			// update powerups
			this.powerups.update();
			// update Missiles
			this.missiles.update();
		} else if (Engine.gameMode == Engine.GAME_MODES.BOSS) {

			// update Missiles
			this.missiles.update();
		}


		// So anyways...
		if (this.game.input.activePointer.isDown) {
			Engine.player.fire();
		}

		// update player movement
		this.updateMovement();

		// update player projectile 
		Engine.player.updateProjectiles();

		// update text
		const healthText = Engine.player.health > 0 ? Engine.player.health : 'dead';
		this.gameText.text =  `Health: ${healthText}`;
		this.scoreText.text =  `Score: ${Engine.score}`;
		// debug text
		// this.debugText.text = 'player pos: ' + Math.floor(Engine.player.x) + ', ' + Math.floor(Engine.player.y);
	},
	movePlayer: function(direction) {
		// Move the player
		// Set direction factor. Negative = Left. Positive = Right
		let directionFactor = direction == "left" ? -1 : 1;

		Engine.player.sprite.body.velocity.x = Engine.player.speed * directionFactor;
		
		Engine.player.facing = direction;
		Engine.player.moving = true;

		Engine.player.sprite.animations.play(Engine.player.facing);
	},
	updateMovement: function() {
		// Keyboard Movement
		// If the left arrow key is pressed
		if (this.input.left.isDown) {
			this.movePlayer('left');
			
		}
		// If the right arrow key is pressed
		else if (this.input.right.isDown) {
			this.movePlayer('right');		
		}

		// Stop the player
		if (!Engine.player.moving) {
			Engine.player.sprite.body.velocity.x = 0;
		}
		// if (!Engine.player.movingY) {
		// 	Engine.player.sprite.body.velocity.y = 0;
		// }

		// Reset moving check for next update cycle
		Engine.player.moving = false;

		// Jump key 
		if (this.input.jump.isDown) {
			Engine.player.jump();			
		} 

	},
	// Callback for player projectile hits
	hitProjectilesObjects: function(_projectile, _object) {

		// deduct damage (TODO: make weapon types)
		_object.health -= 0.333;

		if (_object.health > 0) {
			// small explosion
			Engine.particles.startSmallExplosion(Engine.particles.smallSmoke, _projectile.centerX + 50, _projectile.centerY);

			// kill the projectile (TODO: make weapon types)
			if (_projectile.emitter) {
				_projectile.emitter.destroy();
			}
			_projectile.kill();
			
			// score!
			Engine.score += 2;
		} else {
			// destroy it
			Engine.particles.startExplosion(Engine.particles.smoke, _object.centerX, _object.centerY);

			// if building, add dust explosion
			if (_object.objectType == 'building') {
				Engine.particles.startCrumble(Engine.particles.dust, _object.centerX, _object.centerY);
				// score!
				Engine.score += 200;
			} else {
				// score!
				Engine.score += 100;
			}

			if (_projectile.emitter) {
				_projectile.emitter.destroy();
			}
			_projectile.kill();	
			_object.kill();

		}
		
	},
	// Handle power up collisions
	hitPlayerPowerups: function(_player, _powerup) {
		// Check power up type
		console.log(`hit: ${_powerup.config.sprite}`)
		switch (_powerup.config.sprite) {
		case "bomb-powerup":
			// destroy vehicles
			this.vehicles.group.forEach(function(vehicle) {
				vehicle.kill();
			}, this);

			// destroy buildings
			this.buildings.group.forEach(function(building) {
				building.kill();
			}, this);

			// destroy missiles
			this.missiles.group.forEach(function(missile) {
				missile.kill();
			}, this);

			// Particle explosions
			// Engine.particles.startExplosion(Engine.particles.stars, _player.centerX, _player.centerY);
			Engine.particles.startExplosion(Engine.particles.bigSmoke, _player.centerX, _player.centerY);
			// kill powerup
			_powerup.kill();

			// flash screen
			Engine.game.camera.flash(0x8d4004, 850);
			break;
		case 'health-powerup':
			// Particle explosions
			Engine.particles.startSmallExplosion(Engine.particles.stars, _powerup.centerX, _powerup.centerY);

			// kill powerup
			_powerup.kill();

			// flash screen and redraw health bar
			Engine.game.camera.flash(0xff5454, 850);
			this.drawHealthBar();

			break;
		default:
			break;
		}

		
		// Add score and health
		Engine.score += _powerup.config.score;
		Engine.player.health += _powerup.config.health;
		Engine.player.health = Engine.player.health > 100 ? 100 : Engine.player.health;

		return;
	},
	hitPlayerEnemyProjectiles: function(_player, _projectile) {
		// deduct damage (TODO: make weapon types)
		Engine.player.health -= 1;

		if (Engine.player.health > 0) {
			// small explosion
			Engine.particles.startSplat(Engine.particles.splat, _projectile.centerX + 50, _projectile.centerY);

			_projectile.kill();
			
		} else {
			// destroy it
			Engine.particles.startSplat(Engine.particles.splat, _projectile.centerX, _projectile.centerY);

			if (_projectile.emitter) {
				_projectile.emitter.destroy();
			}
			_projectile.kill();
			
			this.playerDie();

		}

		this.drawHealthBar();

		return;
	},
	// We do the damage here
	hitPlayerBuldings: function(_player, _building) {
		_building.health -= 0.1;

		if (_building.health > 0) {
			Engine.particles.startCrumble(Engine.particles.dust, _building.centerX, _building.centerY);
		} else {
			// destroy it
			Engine.particles.startExplosion(Engine.particles.smoke, _building.centerX, _building.centerY);
			_building.kill();
			// score!
			Engine.score += 150;
		}

		return;
	},
	hitPlayerVehicles: function(_player, _vehicle) {

		// destroy it
		
		Engine.particles.startExplosion(Engine.particles.smoke, _vehicle.centerX, _vehicle.centerY);
		Engine.particles.startSmallExplosion(Engine.particles.dust, _vehicle.centerX, _vehicle.centerY);

		_vehicle.kill();
		// score!
		Engine.score += 100;

		return;
	},
	// Missiles collisions
	hitPlayerMissiles: function(_player, _missile) {
		// ouch!
		Engine.player.health -= _missile.config.damage;+

		// destroy it
		Engine.particles.startExplosion(Engine.particles.splat, _missile.centerX, _missile.centerY);
		Engine.particles.startSmallExplosion(Engine.particles.smallSmoke, _missile.centerX, _missile.centerY);

		_missile.kill();

		this.drawHealthBar();

		if (Engine.player.health < 1) {
			this.playerDie();
		}
		return;
	},
	playerDie: function() {
		// wrap in an IF statement so block only executes once
		if (Engine.player.alive) {
			Engine.player.alive = false;
			Engine.deaths += 1;
			Engine.levelDeaths += 1;
			
			Engine.player.sprite.kill();
			// Flash screen
			Engine.game.camera.flash(0x5f1414, 850);
			// Engine.sounds["dead"].play();
		}

		// Call the 'startMenu' function in 1000ms
		Engine.game.time.events.add(3500, function() {
			// this.buildings.removeAll();
			Engine.game.state.start('menu');
		}, this);
	},
	reset: function() {
		// this.buildings.removeAll();
	}
};

export default PlayState;