// play state

import Player from '../objects/player'
import Buildings from '../objects/buildings';
import Vehicles from '../objects/vehicles';
import Particles from '../objects/particles';

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

		/// Add a background image
		// if (Engine.backgroundImage) {
		// 	this.worlbg = Engine.game.add.image(0,0,'worlbg');
		// 	this.worlbg.fixedToCamera = true;
		// }

		// Environment
		this.environment = Engine.game.add.tileSprite(0, 0, Engine.GAME_WIDTH, Engine.GAME_HEIGHT, 'environment');
		this.environment.fixedToCamera = true;
		// this.clouds.alpha = 0.3;
		this.environment.autoScroll(-Engine.SCROLL_SPEED, 0);

		// create player
		Engine.player = new Player();
		Engine.player.sprite.animations.play(Engine.player.facing);
		
		Engine.game.camera.reset();
		Engine.game.camera.follow(Engine.player.sprite, Phaser.Camera.FOLLOW_PLATFORMER);
		
		// Add groups for buildings and enemies
		
		this.vehicles = new Vehicles;
		this.buildings = new Buildings;

		// Set up Particle emitter functions
		Engine.particles = new Particles;

		// add healthbar
		this.healthBar = Engine.game.add.graphics(8, 8);
		this.healthBar.fixedToCamera = true;
		this.drawHealthBar();
		
		// create score text
		this.gameText = Engine.game.add.text(10, 10, '0', { font: "18px Space Mono", fill: "#ffffff", align: "left" });
		this.gameText.fixedToCamera = true;

		this.scoreText = Engine.game.add.text( Engine.game.camera.width - 160, 10, '0', { font: "18px Space Mono", fill: "#ffffff", align: "left" });
		this.scoreText.fixedToCamera = true;

		// create game message text
		this.messageBar = Engine.game.add.sprite(Engine.game.camera.width/2, 56, 'blackbar');
		this.messageBar.anchor.setTo(0.5,0.5);
		this.messageBar.fixedToCamera = true;
		this.messageBar.alpha = 0;

		this.messageText = Engine.game.add.text(Engine.game.camera.width/2, 56, '', { font: "18px Space Mono", fill: "#ffff00", align: "left" });
		this.messageText.anchor.setTo(0.5, 0.5);
		this.messageText.fixedToCamera = true;

		// create cursor keys (up down left right)
		this.input = {
			// cursor:  Engine.game.input.keyboard.createCursorKeys(),
			left: Engine.game.input.keyboard.addKey(Phaser.Keyboard.A),
			right: Engine.game.input.keyboard.addKey(Phaser.Keyboard.D),
			fire: Engine.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR),
		};

		// START THE TIMER! 
		Engine.levelTime = 0;
		this.levelTimer = Engine.game.time.create(false);
		this.levelTimer.loop(100, function() {
			Engine.levelTime += 0.1;
			Engine.score += 1;
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
		// clear message text
		this.messageText.text = '';
		this.messageBar.alpha = 0;

		// Check group collisions with player / objects / projectiles
		// Player and objects
		Engine.game.physics.arcade.overlap(Engine.player.sprite, this.buildings.group, this.hitPlayerBuldings, null, this);
		
		// Player projectiles and objects
		Engine.game.physics.arcade.overlap(Engine.player.projectiles, this.vehicles.group, this.hitProjectilesObjects, null, this);
		Engine.game.physics.arcade.overlap(Engine.player.projectiles, this.buildings.group, this.hitProjectilesObjects, null, this);
	
		// Enemy projectiles
		Engine.game.physics.arcade.overlap(Engine.player.sprite, this.vehicles.projectiles, this.hitPlayerEnemyProjectiles, null, this);

		// Let them thangs go
		if (this.game.input.activePointer.isDown) {
			Engine.player.fire();
		}

		// update player movement
		this.updateMovement();

		// update enemies
		this.vehicles.update();

		// update buildings
		this.buildings.update();


		// update projectile positions
		this.updateProjectiles();

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
		if (direction == 'left' || direction =='right') {
			let directionFactor = direction == "left" ? -1 : 1;

			Engine.player.sprite.body.velocity.x = Engine.player.speed * directionFactor;
			
			Engine.player.facing = direction;
			Engine.player.movingX = true;
		} else {
			let directionFactor = direction == "up" ? -1 : 1; 
			Engine.player.sprite.body.velocity.y = Engine.player.speed * directionFactor;
			Engine.player.movingY = true;
		}

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
		if (!Engine.player.movingX) {
			Engine.player.sprite.body.velocity.x = 0;
		}
		if (!Engine.player.movingY) {
			Engine.player.sprite.body.velocity.y = 0;
		}

		// Reset moving check for next update cycle
		Engine.player.movingX = false;
		Engine.player.movingY = false;

		// Jump key 
		// if (this.input.jump.isDown) {
		// 	Engine.player.jump();			
		// } 

	},
	updateProjectiles: function() {
		// Loop through alive projectiles
		Engine.player.projectiles.forEachAlive(function(projectile) {
			projectile.angle += Engine.game.rnd.integerInRange(1,3);

			// Update emitter position
			if (projectile.emitter) {
				// console.log(projectile)
				projectile.emitter.x = projectile.world.x;
				projectile.emitter.y = projectile.world.y;

				if (projectile.emitter.x < 1 || projectile.emitter.x > Engine.GAME_WIDTH || projectile.emitter.y < 1 || projectile.emitter.y > Engine.GAME_HEIGHT) {
					projectile.emitter.kill();
				}
			}
			
		}, this);

	},
	// Callback for player projectile hits
	hitProjectilesObjects: function(_projectile, _object) {

		// deduct damage (TODO: make weapon types)
		_object.health -= 1;

		if (_object.health > 0) {
			// small explosion
			Engine.particles.startSmallExplosion(Engine.particles.smallSmoke, _projectile.centerX + 50, _projectile.centerY);

			// kill the projectile (TODO: make weapon types)
			if (_projectile.emitter) {
				_projectile.emitter.destroy();
			}
			_projectile.kill();
			
			// score!
			Engine.score += 5;
		} else {
			// destroy it
			Engine.particles.startExplosion(Engine.particles.smoke, _object.centerX, _object.centerY);

			// if building, add dust explosion
			if (_object.objectType == 'building') {
				Engine.particles.startCrumble(Engine.particles.dust, _object.centerX, _object.centerY);
			}

			if (_projectile.emitter) {
				_projectile.emitter.destroy();
			}
			_projectile.kill();	
			_object.kill();

			// score!
			Engine.score += 100;
		}
		
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
			Engine.score += 100;
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
			// Flash, shake and yell
			Engine.game.camera.flash(0x5f1414, 850);
			// Engine.sounds["dead"].play();
		}

		// Call the 'startMenu' function in 1000ms
		Engine.game.time.events.add(2500, function() {
			// this.buildings.removeAll();
			Engine.game.state.start('menu');
		}, this);
	},
	reset: function() {
		// this.buildings.removeAll();
	}
};

export default PlayState;