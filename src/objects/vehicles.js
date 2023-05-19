
import { distanceActive } from "../utils";

export const VEHICLE_TYPES = [
	{
        sprite: "truck",
        height: 63,
        width: 128,
        health: 8,
		speed: 150,
		damage: 1,
		fireRate: 300
    },
	{
        sprite: "tank",
        height: 74,
        width: 128,
        health: 12,
		speed: 60,
		damage: 5,
		fireRate: 600
    },
	{
		sprite: "chopper",
		height: 51,
        width: 175,
        health: 4,
		speed: -250,
		damage: 5,
		fireRate: 200
	},
	{
		sprite: "jet",
		height: 67,
        width: 163,
        health: 4,
		speed: 500,
		damage: 5,
		fireRate: 150
	}
]

export const VEHICLE_STATES = {
	NORMAL: 0,
	ICE: 1
}

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
        let vehicleType;
		if (Engine.gameMode == Engine.GAME_MODES.RUN) {
			// Select from all vehicles in run mode
			vehicleType = VEHICLE_TYPES[Engine.game.rnd.integerInRange(0,VEHICLE_TYPES.length-1)];
		}  else {
			// Only choppers and jets in boss mode
			vehicleType = VEHICLE_TYPES[Engine.game.rnd.integerInRange(2,3)];
		}

		// set position based on sprite type
		let vx, vy;
		switch (vehicleType.sprite) {
		case "chopper":
			vx = Engine.GAME_WIDTH + vehicleType.width / 2;
			vy = Engine.GAME_HEIGHT * 0.125;
			break;
		case "jet":
			vx = 0 - vehicleType.width / 2;
			vy = Engine.GAME_HEIGHT * 0.08;
			break;
		default:
			vx = 0 - vehicleType.width / 2;
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
		vehicle.nextFire = Engine.game.time.now + vehicleType.fireRate;
		vehicle.state = VEHICLE_STATES.NORMAL;
		return vehicle;
    }

    update(player) {
		
		
		if (this.spawnTime < Engine.levelTime && Engine.score > 450) {
			this.spawn();

			// check game state to determine spawn rate
			if (Engine.gameMode == Engine.GAME_MODES.RUN) {
				// RUN MODE
				// ramp it up as the score increases
				if (Engine.score < 4000) {
					this.spawnTime = Engine.levelTime + Engine.game.rnd.integerInRange(3,4);
				} else if (Engine.score < 8000) {
					this.spawnTime = Engine.levelTime + Engine.game.rnd.integerInRange(2,4);
				} else if (Engine.score < 30000) {
					this.spawnTime = Engine.levelTime + 2;
				} else {
					this.spawnTime = Engine.levelTime + 1;
				}
			} else if (Engine.gameMode == Engine.GAME_MODES.BOSS) {
				// BOSS MODE
				this.spawnTime = Engine.levelTime + 5;
			}
			
		} 

		this.group.forEachAlive(function(vehicle) {
			// fire
			if (Engine.game.time.now > vehicle.nextFire && this.projectiles.countDead() > 0 && vehicle.inCamera && vehicle.state == VEHICLE_STATES.NORMAL) {
				this.fire(vehicle, player);
			}
		}, this)
    }

	fire(vehicle, player) {
		let projectile = this.projectiles.getFirstExists(false);
		let px = vehicle.centerX;
		let py = vehicle.centerY;
		projectile.reset(px, py);
		Engine.game.physics.arcade.moveToObject(projectile,player.sprite,750);
		vehicle.nextFire = Engine.game.time.now + vehicle.config.fireRate;

		// play sound - todo: enum
		Engine.sounds[vehicle.config.sprite].play();
	}
}