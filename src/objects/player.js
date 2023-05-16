const range = (start, end) => {
    const length = end - start;
    return Array.from({ length }, (_, i) => start + i);
}

export default class Player {
	constructor() {
		this.sprite = Engine.game.add.sprite(0, Engine.GAME_HEIGHT - 50, 'player');
		
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
		this.fireRate =  500;
		this.alive = true;

		this.facing = 'right';		
		this.movingX = false;
		this.movingY = false;
		this.speed = 306 * Engine.playerData.speedFactor;
		
		// Projectile Group
		this.projectiles = Engine.game.add.group();
		this.projectiles.enableBody = true;
		this.projectiles.physicsBodyType = Phaser.Physics.ARCADE;
		this.projectiles.createMultiple(12,  'projectile', 0, false);
		this.projectiles.setAll('anchor.x', 0.5);
		this.projectiles.setAll('anchor.y', 0.5);
		this.projectiles.setAll('outOfBoundsKill', true);
		this.projectiles.setAll('checkWorldBounds', true);
	}

	fire() {
		if (Engine.game.time.now > this.nextFire && this.projectiles.countDead() > 0 && this.alive) {
			this.nextFire = Engine.game.time.now + this.fireRate;

			// create eye projectiles
			for (let i=0;i<2;i++) {
				let projectile = this.projectiles.getFirstExists(false);
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

				projectile.reset(px, py);
				
				projectile.velocity = 150;
				projectile.rotation =  Engine.game.physics.arcade.angleToPointer(projectile);
				Engine.game.physics.arcade.velocityFromAngle(projectile.angle, 750, projectile.body.velocity);

				// smoke trail particles
				projectile.emitter = Engine.game.add.emitter(px ,py, 100);
				projectile.emitter.placement = 'top';
				projectile.emitter.makeParticles('smoke');

				projectile.emitter.setYSpeed(0);
				projectile.emitter.setXSpeed(-350);
				// Use some gravity for the particles
				projectile.emitter.gravity = 0;
				projectile.emitter.setAlpha(1, 0, 500);
				projectile.emitter.setScale(0.7, 0.5, 0.7, 0.5, 1000);
				
				projectile.emitter.start(false, 500, 150);

				Engine.particles.startSmallExplosion(Engine.particles.puff, px, py);
			}
			
		}
	}
}