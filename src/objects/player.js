
import { range } from "../utils";

export const PLAYER_STATES = {
	NORMAL: 0,
	FLAME: 1,
	ICE: 2 // TBD
}

export default class Player {
	constructor() {
		this.startY = 0;
		this.sprite = Engine.game.add.sprite(0, this.startY, 'player');
		
		// set up animations
		this.sprite.animations.add('left', range(0,Engine.playerData.frames / 2), Engine.playerData.frameRate, true);
		this.sprite.animations.add('right', range(Engine.playerData.frames / 2, Engine.playerData.frames).reverse(), Engine.playerData.frameRate, true);
		
		// set anchor
		this.sprite.anchor.setTo(0.5, 0.5);

		// set up gravity
		Engine.game.physics.arcade.enable(this.sprite);
		this.sprite.body.gravity.y = Engine.gravity;
		this.sprite.body.collideWorldBounds = true;
		
		this.health = 100;
		this.nextFire = 0;
		
		this.fireRate =  65;
		this.alive = true;

		this.state = PLAYER_STATES.NORMAL;
		this.powerupTime = 0;

		this.facing = 'right';		
		this.moving = false;
		this.speed = 306;

		this.jumping = false;
		this.jumpForce = -1000;
		
		// Projectile Group
		this.projectiles = Engine.game.add.group();
		this.projectiles.enableBody = true;
		this.projectiles.physicsBodyType = Phaser.Physics.ARCADE;
		this.projectiles.createMultiple(20,  'projectile', 0, false);
		this.projectiles.setAll('anchor.x', 0.5);
		this.projectiles.setAll('anchor.y', 0.5);
		this.projectiles.setAll('outOfBoundsKill', true);
		this.projectiles.setAll('checkWorldBounds', true);

	}

	isGrounded() {
		return ((this.sprite.y + this.sprite.height / 2) > (Engine.GAME_HEIGHT - 10));
	}

	move(direction) {
		// Move the player
		// Set direction factor. Negative = Left. Positive = Right
		let directionFactor = direction == "left" ? -1 : 1;

		this.sprite.body.velocity.x = this.speed * directionFactor;
		
		this.facing = direction;
		this.moving = true;

		// update animation
		this.sprite.animations.play(this.facing);
	}
	
	update(_input) {

		// check state
		switch(this.state) {
		case PLAYER_STATES.FLAME:
			// set tint
			this.sprite.tint = 0xdb7b41;
			break;
		case PLAYER_STATES.ICE:
			this.sprite.tint = 0x00cdff;
			break;
		default:
			this.sprite.tint = 0xffffff;
			break;
		}

		// regen some health. you are a kaiju after all
		if (this.health < 100 && this.alive) {
			this.health += 0.01;
		}

		// Keyboard Movement
		// If the left arrow key is pressed
		if (_input.left.isDown) {
			this.move('left');		
		}
		// If the right arrow key is pressed
		else if (_input.right.isDown) {
			this.move('right');		
		}

		// Stop the player
		if (!this.moving) {
			this.sprite.body.velocity.x = 0;
		}

		// Reset moving check for next update cycle
		this.moving = false;

		// Jump key 
		if (_input.jump.isDown) {
			this.jump();			
		} 
	}

	jump() {
		// If player is touching the ground
		if ( this.isGrounded() && this.alive ) {
			// Move the player upward (jump)
			this.sprite.body.velocity.y = this.jumpForce;
			// Engine.sounds["jump"].play();
		}
	}

	fire() {
		if (Engine.game.time.now > this.nextFire && this.projectiles.countDead() > 0 && this.alive) {
			this.nextFire = Engine.game.time.now + this.fireRate;

			// create eye projectiles
			for (let i=0;i<2;i++) {
				let projectile = this.projectiles.getFirstExists(false);
				if (projectile) {
					let px;
					let py;

					// set left and right position
					if (i == 0) {
						// left eye
						px = this.sprite.x - 50;
						py = this.sprite.y  - 100;
					} else {
						// right eye
						px = this.sprite.x + 50;
						py = this.sprite.y - 100;
					}

					Engine.particles.startSmallExplosion(Engine.particles.puff, px, py);
					projectile.reset(px, py);
					
					projectile.velocity = 150;
					projectile.rotation =  Engine.game.physics.arcade.angleToPointer(projectile);
					Engine.game.physics.arcade.velocityFromAngle(projectile.angle, 750, projectile.body.velocity);

					// check state for alterations
					switch(this.state) {
					case PLAYER_STATES.FLAME:
						projectile.scale.setTo(2.5);
						break;
					case PLAYER_STATES.ICE:
						projectile.scale.setTo(1);
						projectile.tint = 0x00cdff;
						break;
					default:
						projectile.scale.setTo(1);
						projectile.tint = 0xffffff;
						break;
					}
					
				}
			}
			
			// play sound - todo: enum
			Engine.sounds["player-fire"].play();
		}
	}

	updateProjectiles() {
		// Loop through alive projectiles
		this.projectiles.forEachAlive(function(projectile) {
			projectile.angle += Engine.game.rnd.integerInRange(2,5);			
		}, this);
	}
}