
import { distanceActive } from "../utils";

const VEHICLE_TYPES = [
	{
        sprite: "truck",
        height: 63,
        width: 128,
        health: 2,
		speed: 200,
		damage: 1,
		fireRate: 400
    },
	{
        sprite: "tank",
        height: 74,
        width: 128,
        health: 6,
		speed: 100,
		damage: 5,
		fireRate: 800
    },
	{
		sprite: "chopper",
		height: 51,
        width: 175,
        health: 2,
		speed: -250,
		damage: 5,
		fireRate: 200
	},
	{
		sprite: "jet",
		height: 67,
        width: 163,
        health: 2,
		speed: 500,
		damage: 5,
		fireRate: 150
	}
]

export default class Vehicles {
	constructor() {

        this.group = Engine.game.add.group();
		this.group.enableBody = true;
		this.group.physicsBodyType = Phaser.Physics.ARCADE;
		// this.group.setAll('outOfBoundsKill', true);
		this.group.setAll('checkWorldBounds', true);

        this.spawnTime = 0;

		// Projectile Group
		this.projectiles = Engine.game.add.group();
		this.projectiles.enableBody = true;
		this.projectiles.physicsBodyType = Phaser.Physics.ARCADE;
		this.projectiles.createMultiple(50,  'bullet', 0, false);
		this.projectiles.setAll('anchor.x', 0.5);
		this.projectiles.setAll('anchor.y', 0.5);
		this.projectiles.setAll('outOfBoundsKill', true);
		this.projectiles.setAll('checkWorldBounds', true);
	}

    spawn() {
        // get random type
        const vehicleType = VEHICLE_TYPES[Engine.game.rnd.integerInRange(0,VEHICLE_TYPES.length-1)];

		// set position based on sprite type
		let vx, vy;
		switch (vehicleType.sprite) {
		case "chopper":
			vx = Engine.GAME_WIDTH - 1;
			vy = Engine.GAME_HEIGHT * 0.125;
			break;
		case "jet":
			vx = 1;
			vy = Engine.GAME_HEIGHT * 0.08;
			break;
		default:
			vx = 1;
			vy = Engine.GAME_HEIGHT - vehicleType.height - 20;
			break;
		}

        // create vehicle sprite
		let vehicle = this.group.create(
			vx,
			vy,
			vehicleType.sprite
		);

		vehicle.body.gravity.y = 0;
		vehicle.body.immovable = true;
		// vehicle.body.moves = false;
		vehicle.body.velocity.x = vehicleType.speed;
        vehicle.health = vehicleType.health;
		vehicle.config = vehicleType;
		vehicle.objectType = "vehicle";
		vehicle.nextFire = 0;

		return vehicle;
    }

    update() {
        if (this.spawnTime < Engine.levelTime && Engine.score > 350) {
			this.spawn();
			this.spawnTime = Engine.levelTime + Engine.game.rnd.integerInRange(2,4)
		} 
		this.group.forEachAlive(function(vehicle) {
			// if (Engine.player.sprite.world.x - vehicle.world.x < 100) {
			// 	vehicle.body.velocity.x = 0;
			// }
			if (Engine.game.time.now > vehicle.nextFire && this.projectiles.countDead() > 0) {
				let projectile = this.projectiles.getFirstExists(false);
				let px = vehicle.centerX;
				let py = vehicle.centerY;
				projectile.reset(px, py);
				Engine.game.physics.arcade.moveToObject(projectile,Engine.player.sprite,750);
				vehicle.nextFire = Engine.game.time.now + vehicle.config.fireRate;
			}
		}, this)
    }

	fire(vehicle) {
		if (Engine.game.time.now > vehicle.nextFire && this.projectiles.countDead() > 0) {
			
			let projectile = this.projectiles.getFirstExists(false);
			let px = vehicle.centerX;
			let py = vehicle.centerY;
			projectile.reset(px, py);
			Engine.game.physics.arcade.moveToObject(projectile,Engine.player.sprite,120);
			vehicle.nextFire = Engine.game.time.now + vehicle.fireRate;
		}
	}
}