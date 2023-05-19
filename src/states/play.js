// play state
import Particles from '../objects/particles';

import Player, { PLAYER_STATES } from '../objects/player'
import Buildings from '../objects/buildings';
import Vehicles from '../objects/vehicles';
import Powerups from '../objects/powerups';
import Missiles from '../objects/missiles';
import Boss from '../objects/boss';


const PlayState = {
	create: function() {	
		
		Engine.score = 0;

		// set campaign background color
		Engine.game.stage.backgroundColor = Engine.backgroundColor;

		// Environment
		this.environment = Engine.game.add.tileSprite(0, 0, Engine.GAME_WIDTH, Engine.GAME_HEIGHT, 'environment');
		this.environment.fixedToCamera = true;
		this.environment.autoScroll(-Engine.SCROLL_SPEED, 0);

		// create player
		this.player = new Player();
		this.player.sprite.animations.play(this.player.facing);
		
		// Create end boss
		this.boss = new Boss;
		
		// Add groups for buildings and enemies
		
		this.vehicles = new Vehicles;
		this.buildings = new Buildings;

		// Powerup group
		this.powerups = new Powerups;

		// Missiles
		this.missiles = new Missiles;

		// Set up Particle emitter functions
		Engine.particles = new Particles;

		// add healthbars
		this.player.healthBar = Engine.game.add.graphics(8, 8);
		this.player.healthBar.fixedToCamera = true;
		this.player.healthBar.outlineColor = 0x700d00;
		this.player.healthBar.fillColor = 0x4a0c04;

		this.boss.healthBar = Engine.game.add.graphics(8, 56);
		this.boss.healthBar.fixedToCamera = true;
		this.boss.healthBar.outlineColor = 0x5f6f96;
		this.boss.healthBar.fillColor = 0x283a66;

		// draw initial health bar
		this.drawHealthBar(this.player);
		
		// create score text
		this.gameText = Engine.game.add.text(12, 12, '0', { font: "16px Monospace", fill: "#ffffff", align: "left" });
		this.gameText.fixedToCamera = true;

		this.scoreText = Engine.game.add.text( Engine.game.camera.width - 160, 10, '0', { font: "18px Monospace", fill: "#ffffff", align: "left" });
		this.scoreText.fixedToCamera = true;

		this.bossText = Engine.game.add.text(12, 60, '0', { font: "16px Monospace", fill: "#ffffff", align: "left" });
		this.bossText.fixedToCamera = true;

		// create cursor keys (up down left right)
		this.input = {
			// cursor:  Engine.game.input.keyboard.createCursorKeys(),
			left: Engine.game.input.keyboard.addKey(Phaser.Keyboard.A),
			right: Engine.game.input.keyboard.addKey(Phaser.Keyboard.D),
			jump: Engine.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR),
		};

		// Add sounds
		this.music = Engine.game.add.audio("bg-music"); // Add the music
		this.music.loop = true; // Make it loop
		this.music.volume = 0.8;
		this.music.play(); // Start the music
		
		this.bossMusic = Engine.game.add.audio("boss-music"); // Add the music
		this.bossMusic.loop = true; // Make it loop
		this.bossMusic.volume = 0.9;

		Engine.sounds["health-powerup"] = Engine.game.add.audio("health-powerup");
		Engine.sounds["flame-powerup"] = Engine.game.add.audio("flame-powerup");
		Engine.sounds["bomb-powerup"] = Engine.game.add.audio("bomb-powerup");

		Engine.sounds["jet"] = Engine.game.add.audio("jet");
		Engine.sounds["truck"] = Engine.game.add.audio("truck");
		Engine.sounds["tank"] = Engine.game.add.audio("tank");
		Engine.sounds["chopper"] = Engine.game.add.audio("chopper");
		Engine.sounds["missile"] = Engine.game.add.audio("missile");
		Engine.sounds["building"] = Engine.game.add.audio("building");
		Engine.sounds["boss"] = Engine.game.add.audio("boss");
		Engine.sounds["boss"].volume = 0.7;
		Engine.sounds["boss-end"] = Engine.game.add.audio("boss");
		Engine.sounds["explode"] = Engine.game.add.audio("explode");

		Engine.sounds["player-fire"] = Engine.game.add.audio("player-fire");
		Engine.sounds["player-hit"] = Engine.game.add.audio("player-hit");
		Engine.sounds["player-hit"].allowMultiple = false;

		// START THE TIMER! 
		Engine.levelTime = 0;
		this.levelTimer = Engine.game.time.create(false);
		this.levelTimer.loop(100, function() {
			Engine.levelTime += 0.1;

			// Add a point to the score
			if (this.player.alive) {
				Engine.score += 1;
			}
			
		}, this);
		this.levelTimer.start();
	},
	drawHealthBar: function(gameObject) {

		var maxWidth = Engine.game.camera.width - 16;
		var height = 32;
		var width = maxWidth * ( gameObject.health / 100 );

		gameObject.healthBar.clear();

		if (width > 0) {
			gameObject.healthBar.beginFill(gameObject.healthBar.fillColor, 0.5);
			gameObject.healthBar.lineStyle(2, gameObject.healthBar.outlineColor, 0.8);
		
			gameObject.healthBar.moveTo(0, 0);
			gameObject.healthBar.lineTo(width, 0);
			gameObject.healthBar.lineTo(width, height);
			gameObject.healthBar.lineTo(0, height);
			gameObject.healthBar.lineTo(0, 0);
		
			gameObject.healthBar.endFill();
		}
	},
	update: function() {

		// check game state and switch if necessary
		if ( Engine.score > 500 && this.boss.health > 0 ) {
			Engine.gameMode = Engine.GAME_MODES.BOSS;
		}

		if (Engine.gameMode == Engine.GAME_MODES.RUN) {
			// Check group collisions with player / objects / projectiles
			// Player and objects
			Engine.game.physics.arcade.overlap(this.player.sprite, this.buildings.group, this.hitPlayerBuldings, null, this);
			Engine.game.physics.arcade.overlap(this.player.sprite, this.vehicles.group, this.hitPlayerVehicles, null, this);
			Engine.game.physics.arcade.overlap(this.player.sprite, this.missiles.group, this.hitPlayerMissiles, null, this);
			// Player projectiles and objects
			Engine.game.physics.arcade.overlap(this.player.projectiles, this.vehicles.group, this.hitProjectilesObjects, null, this);
			Engine.game.physics.arcade.overlap(this.player.projectiles, this.buildings.group, this.hitProjectilesObjects, null, this);
			Engine.game.physics.arcade.overlap(this.player.projectiles, this.missiles.group, this.hitProjectilesObjects, null, this);
			// Player Powerups
			Engine.game.physics.arcade.overlap(this.player.sprite, this.powerups.group, this.hitPlayerPowerups, null, this);

			// Enemy projectiles
			Engine.game.physics.arcade.overlap(this.player.sprite, this.vehicles.projectiles, this.hitPlayerEnemyProjectiles, null, this);

			// update enemies
			this.vehicles.update(this.player);

			// update buildings
			this.buildings.update();

			// update powerups
			this.powerups.update();
			// update Missiles
			this.missiles.update();

			// check powerup time
			if (this.player.state == PLAYER_STATES.FLAME && Engine.levelTime > this.player.powerupTime) {
				this.player.state = PLAYER_STATES.NORMAL;
				console.log(`new state: ${this.player.state}`)
			}
			
		} else if (Engine.gameMode == Engine.GAME_MODES.BOSS) {

			// check if boss has been spawned
			if (this.boss.hasSpawned == false) {
				// spawn boss after short count
				this.boss.hasSpawned = true;

				// swap the music
				this.music.stop();
				this.bossMusic.play();

				// reset player health
				if (this.player.alive) {
					this.player.health = 100;
					this.player.state = PLAYER_STATES.NORMAL;
				}

				// clear everything			
				this.clearGameObjects();

				// tint the bg
				Engine.game.add.tween(this.environment)
					.to( { alpha: 0.3 }, 1000, Phaser.Easing.Linear.None, true, 0);

				Engine.game.time.events.add(1500, function() {
					this.boss.spawn();
				}, this);
			}
			
			// check boss collisions
			
			if (this.boss.alive) {
				Engine.game.physics.arcade.overlap(this.player.sprite, this.boss.sprite, this.hitPlayerBoss, null, this);			
				Engine.game.physics.arcade.overlap(this.player.sprite, this.boss.projectiles, this.hitPlayerBoss, null, this);
				// player projectiles
				Engine.game.physics.arcade.overlap(this.player.projectiles, this.boss.sprite, this.hitProjectileBoss, null, this);
				Engine.game.physics.arcade.overlap(this.player.projectiles, this.boss.projectiles, this.hitProjectilesObjects, null, this);
			}
			// missiles
			Engine.game.physics.arcade.overlap(this.player.sprite, this.vehicles.group, this.hitPlayerMissiles, null, this);
			Engine.game.physics.arcade.overlap(this.player.projectiles, this.vehicles.group, this.hitProjectilesObjects, null, this);
			
			// Enemy projectiles
			Engine.game.physics.arcade.overlap(this.player.sprite, this.vehicles.projectiles, this.hitPlayerEnemyProjectiles, null, this);

			// update boss with player ref
			this.boss.update(this.player);


			// other logic like boss health < 50%
			if (this.boss.health < (this.boss.totalHealth * 0.75)) {
				// update Missiles
				this.vehicles.update(this.player);
			}

			// draw boss health bar
			this.drawHealthBar(this.boss);
			
		}

		// So anyways...
		if (this.game.input.activePointer.isDown) {
			this.player.fire();
		}

		// update player movement
		this.player.update(this.input);

		// update player projectile 
		this.player.updateProjectiles();

		// update text
		const healthText = this.player.health > 0 ? Math.trunc(this.player.health) : 'dead';
		this.gameText.text =  `Health: ${healthText}`;
		this.scoreText.text =  `Score: ${Engine.score}`;
		// update boss text
		if (Engine.gameMode == Engine.GAME_MODES.BOSS) {
			const bossHealthText = this.boss.health > 0 ? Math.trunc(this.boss.health ) : 'dead';
			this.bossText.text = `Boss: ${bossHealthText}`;
		} else {
			this.bossText.text = '';
		}
	},
	// Callback for player projectile hits
	hitProjectilesObjects: function(_projectile, _object) {

		// deduct damage (TODO: make weapon types)
		_object.health -= 0.333;

		if (_object.health > 0) {
			// small explosion
			Engine.particles.startSmallExplosion(Engine.particles.smallSmoke, _projectile.centerX + 50, _projectile.centerY);

			// kill the projectile
			if (this.player.state == PLAYER_STATES.NORMAL) {
				_projectile.kill();
			}
			
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

			_projectile.kill();	
			_object.kill();

			// play sound - todo: enum
			Engine.sounds["explode"].play();
		}
		
	},
	// Handle power up collisions
	hitPlayerPowerups: function(_player, _powerup) {
		// Check power up type
		switch (_powerup.config.sprite) {
		case "bomb-powerup":
			this.clearGameObjects();

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
			Engine.particles.startSmallExplosion(Engine.particles.stars, this.player.sprite.centerX, this.player.sprite.centerY);

			// kill powerup
			_powerup.kill();

			// flash screen and redraw health bar
			Engine.game.camera.flash(0xff5454, 850);
			this.drawHealthBar(this.player);

			break;
		case 'flame-powerup':
			// kill powerup
			_powerup.kill();
			// flash screen
			Engine.game.camera.flash(0x8b0000, 850);
			// change player state
			this.player.state = PLAYER_STATES.FLAME;
			this.player.powerupTime = Engine.levelTime + 6;
			console.log(`new state: ${this.player.state}`)
			break;
		default:
			// kill powerup
			_powerup.kill();
			break;
		}

		// Add score and health
		Engine.score += _powerup.config.score;
		this.player.health += _powerup.config.health;
		this.player.health = this.player.health > 100 ? 100 : this.player.health;

		// play sound - todo: enum
		Engine.sounds[_powerup.config.sprite].play();

		return;
	},
	hitPlayerEnemyProjectiles: function(_player, _projectile) {
		// deduct damage (TODO: make weapon types)
		this.player.health -= 1;

		if (this.player.health > 0) {
			// small explosion
			Engine.particles.startSplat(Engine.particles.splat, _projectile.centerX + 50, _projectile.centerY);
			_projectile.kill();
			// play sound - todo: enum
			Engine.sounds["player-hit"].play();
			
		} else {
			// destroy it
			Engine.particles.startSplat(Engine.particles.splat, _projectile.centerX, _projectile.centerY);
			_projectile.kill();
			// play sound - todo: enum
			Engine.sounds["explode"].play();
			this.playerDie();
		}

		this.drawHealthBar(this.player);

		return;
	},
	// We do the damage here
	hitPlayerBuldings: function(_player, _building) {
		_building.health -= 0.15;

		if (_building.health > 0) {
			Engine.particles.startCrumble(Engine.particles.dust, _building.centerX, _building.centerY);
		} else {
			// destroy it
			Engine.particles.startExplosion(Engine.particles.smoke, _building.centerX, _building.centerY);
			_building.kill();
			// score!
			Engine.score += 250;
			// play sound - todo: enum
			Engine.sounds["building"].play();
		}

		return;
	},
	hitPlayerVehicles: function(_player, _vehicle) {

		// destroy it
		
		Engine.particles.startExplosion(Engine.particles.smoke, _vehicle.centerX, _vehicle.centerY);
		Engine.particles.startSmallExplosion(Engine.particles.dust, _vehicle.centerX, _vehicle.centerY);

		_vehicle.kill();

		// score!
		Engine.score += 150;

		// play sound - todo: enum
		Engine.sounds["explode"].play();

		return;
	},
	// Missiles collisions
	hitPlayerMissiles: function(_player, _missile) {
		// ouch!
		this.player.health -= _missile.config.damage;

		// destroy it
		Engine.particles.startExplosion(Engine.particles.splat, _missile.centerX, _missile.centerY);
		Engine.particles.startSmallExplosion(Engine.particles.smallSmoke, _missile.centerX, _missile.centerY);

		_missile.kill();

		this.drawHealthBar(this.player);

		if (this.player.health < 1) {
			// play sound - todo: enum
			Engine.sounds["explode"].play();
			this.playerDie();
		} else {
			// play sound - todo: enum
			Engine.sounds["player-hit"].play();
		}
		return;
	},
	// Boss Mode Collisions
	hitPlayerBoss: function(_player, _boss) {
		// boss is boss or projectiles
		this.player.health -= this.boss.damage;
		// small explosion
		Engine.particles.startSmallExplosion(Engine.particles.splat, _player.centerX + 50, _player.centerY);

		this.drawHealthBar(this.player);

		if (this.player.health < 1) {
			// play sound - todo: enum
			Engine.sounds["explode"].play();
			this.playerDie();
		} else {
			// play sound - todo: enum
			if (this.levelTime - _boss.lastPlay > 1) {
				Engine.sounds["player-hit"].play();
				_boss.lastPlay = this.levelTime;
			}
		}	
	},
	hitProjectileBoss: function(_object, _projectile) {
		// deduct damage (TODO: make weapon types)
		this.boss.health -= 0.333;
		console.log(this.boss.health)

		if (this.boss.health > 0) {
			console.log('in here')
			// small explosion
			Engine.particles.startSmallExplosion(Engine.particles.smallSmoke, _projectile.centerX + 50, _projectile.centerY);
			
			_projectile.kill();
			
			// score!
			Engine.score += 25;
		} else {
			// destroy it
			Engine.particles.startExplosion(Engine.particles.smoke, _object.centerX, _object.centerY);
			Engine.particles.startExplosion(Engine.particles.dust, _object.centerX, _object.centerY);
			Engine.particles.startExplosion(Engine.particles.splat, _object.centerX, _object.centerY);
			Engine.particles.startExplosion(Engine.particles.stars, this.player.sprite.centerX, this.player.sprite.centerY);
			// score!
			Engine.score += 5000;

			_projectile.kill();	
			_object.kill();

			// Boss dead - Long Live Boss
			this.boss.alive = false;
			
			// give player 100 life as reward. it won't last 
			this.player.health = 100; 

			// play sound - todo: enum
			Engine.sounds["boss-end"].play();
			this.bossMusic.stop();
			this.music.play();

			// Change background and switch game mode on completion
			let normalizeBGTween = Engine.game.add.tween(this.environment)
				.to( { alpha: 1 }, 1000, Phaser.Easing.Linear.None, true, 0);
			
			normalizeBGTween.onComplete.addOnce(() => {
				// switch mode and spawn flag
				Engine.gameMode = Engine.GAME_MODES.RUN;
				
				this.boss.hasSpawned = false;
			}, this);
			

		}

		this.drawHealthBar(this.boss);
	},
	playerDie: function() {
		// wrap in an IF statement so block only executes once
		if (this.player.alive) {
			this.player.alive = false;
			Engine.deaths += 1;
			Engine.levelDeaths += 1;
			
			this.player.sprite.kill();
			// Flash screen
			Engine.game.camera.flash(0x5f1414, 850);
			// Engine.sounds["dead"].play();
		}

		// Call the 'startMenu' function in 1000ms
		Engine.game.time.events.add(5000, function() {
			// this.buildings.removeAll();
			this.music.stop();
			this.bossMusic.stop();
			Engine.game.state.start('menu');
		}, this);
	},
	// clear all game objects
	clearGameObjects: function() {
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
	}
};

export default PlayState;