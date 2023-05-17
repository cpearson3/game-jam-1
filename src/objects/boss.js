
import { range } from "../utils";

const BOSS_DATA = {
    sprite: "boss",
    health: 50,
    frames: 8,
    frameRate: 8
}

export default class Boss {
	constructor() {
		this.startY = Engine.GAME_HEIGHT - 70;
		this.sprite = Engine.game.add.sprite(0, this.startY, 'boss');
		
		// set up animations
		this.sprite.animations.add('fight', range(0,BOSS_DATA.frames), BOSS_DATA.frameRate, true);
		
		// set anchor
		this.sprite.anchor.setTo(0.5, 0.5);

		// set up gravity
		Engine.game.physics.arcade.enable(this.sprite);
		this.sprite.body.gravity.y = 2500;
		this.sprite.body.collideWorldBounds = true;
		
		this.health = 100;
		this.nextFire = 0;
		// this.fireRate =  450;
		this.fireRate =  350;
		this.alive = true;

		this.facing = 'right';		
		this.moving = false;
		this.speed = 306;
		
		// Projectile Group
		this.projectiles = Engine.game.add.group();
		this.projectiles.enableBody = true;
		this.projectiles.physicsBodyType = Phaser.Physics.ARCADE;
		this.projectiles.createMultiple(20,  'blue-flame', 0, false);
		this.projectiles.setAll('anchor.x', 0.5);
		this.projectiles.setAll('anchor.y', 0.5);
		this.projectiles.setAll('outOfBoundsKill', true);
		this.projectiles.setAll('checkWorldBounds', true);

	}

	jump() {
		// If boss is touching the ground
		if ( ((this.sprite.y + this.sprite.height / 2) > (Engine.GAME_HEIGHT - 10)) && this.alive ) {
			// Move the boss upward (jump)
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
					
                    // Fire at player
					projectile.velocity = 200;
					Engine.game.physics.arcade.moveToObject(projectile,Engine.player.sprite,750);
				}
			}
			
		}
	}
}