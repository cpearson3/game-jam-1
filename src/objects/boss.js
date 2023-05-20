
import { range } from "../utils";

const BOSS_DATA = {
    sprite: "boss",
    health: 100,
    frames: 8,
    frameRate: 8,
	frameWidth: 483,
	frameHeight: 351,
	projectileHealth: 9,
	speed: 75,
	damage: 0.3
}

export default class Boss {
	constructor() {
		this.health = BOSS_DATA.health;
		this.totalHealth = BOSS_DATA.health;
		this.highFireRate =  2250;
		this.midFireRate =  1750;
		this.lowFireRate = 1350;
		this.projectileSpeed = 375;
		this.alive = false;
		this.hasSpawned = false;
		this.idle = true;
	}

	spawn() {
		this.startY = 1;
		this.startX = Engine.GAME_WIDTH - BOSS_DATA.frameWidth / 2;
		this.sprite = Engine.game.add.sprite(this.startX, this.startY, 'boss');
		
		// set up animations
		this.sprite.animations.add('fight', range(0,BOSS_DATA.frames), BOSS_DATA.frameRate, true);
		this.sprite.animations.play('fight');

		// set anchor
		this.sprite.anchor.setTo(0.5, 0.5);
		
		// set up gravity
		Engine.game.physics.arcade.enable(this.sprite);
		this.sprite.body.gravity.y = Engine.gravity;
		this.sprite.body.collideWorldBounds = true;
		
		// set next fire to be a few moments from now
		this.nextFire = Engine.game.time.now + 350;

		this.jumpForce = -1400;

		this.facing = 'right';		
		this.moving = false;
		this.speed = BOSS_DATA.speed;
		this.damage = BOSS_DATA.damage;


		// Projectile Group
		this.projectiles = Engine.game.add.group();
		this.projectiles.enableBody = true;
		this.projectiles.physicsBodyType = Phaser.Physics.ARCADE;
		this.projectiles.createMultiple(20,  'blue-flame', 0, false);
		this.projectiles.setAll('anchor.x', 0.5);
		this.projectiles.setAll('anchor.y', 0.5);
		this.projectiles.setAll('outOfBoundsKill', true);
		this.projectiles.setAll('checkWorldBounds', true);

		// create damage emitter
		Engine.particles.bossDamageEmitter = Engine.particles.createBossDamageEmitter();

		// fade him in
		this.sprite.alpha = 0;
		let fadeInTween = Engine.game.add.tween(this.sprite)
			.to( { alpha: 1 }, 1000, Phaser.Easing.Linear.None, true, 0);
		fadeInTween.onComplete.addOnce(() => {
			this.alive = true;
		}, this);

	}

	// Update boss actions
	update(player) {
		// here
		if (this.alive) {
			this.jump();
			this.fire(player);

			// bounce around
			let rndFactor = Engine.game.rnd.integerInRange(0,99) / 100;
			if (this.sprite.x >= this.startX) {
				this.sprite.body.velocity.x = (-1 - rndFactor) * this.speed;
			} else if (this.sprite.x < Engine.GAME_WIDTH * 0.7) {
				this.sprite.body.velocity.x = (1 + rndFactor) * this.speed ;
			}

			// regen some health. you are a kaiju after all
			if (this.health < 100 && this.alive) {
				this.health += 0.02;
			}

		}
	}

	isGrounded() {
		return ((this.sprite.y + this.sprite.height / 2) > (Engine.GAME_HEIGHT - 10));
	}

	jump() {
		// If boss is touching the ground
		if ( this.isGrounded() ) {
			// Move the boss upward (jump)
			this.sprite.body.velocity.y = this.jumpForce;
			// Engine.sounds["jump"].play();
		}
	}

	fire(player) {
		if (Engine.game.time.now > this.nextFire && this.projectiles.countDead() > 0) {
			// set next fire time
			let nF;
			if (this.health < 25) {
				nF =  Engine.game.rnd.integerInRange(this.lowFireRate,this.midFireRate);
			} else {
				nF = Engine.game.rnd.integerInRange(this.midFireRate,this.highFireRate);
			}
			this.nextFire = Engine.game.time.now + nF;

			// create eye projectiles
			let projectile = this.projectiles.getFirstExists(false);
			if (projectile) {
				let px = this.sprite.centerX;
				let py = this.sprite.centerY;

				projectile.reset(px, py);
				
				// set projectile health
				projectile.health = BOSS_DATA.projectileHealth;

				// Fire at player
				Engine.game.physics.arcade.moveToObject(projectile,player.sprite,this.projectileSpeed);

				// play sound - todo: enum
				Engine.sounds["boss"].play();
			}	
		}
	}
}