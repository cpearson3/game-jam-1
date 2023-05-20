const POWERUP_TYPES = [
    {
        sprite: "bomb-powerup",
        height: 64,
        width: 64,
        score: 500,
        health: 0
    },
    {
        sprite: "health-powerup",
        height: 64,
        width: 64,
        score: 500,
        health: 25
    },
    {
        sprite: "flame-powerup",
        height: 64,
        width: 64,
        score: 500,
        health: 0
    },
    {
        sprite: "ice-powerup",
        height: 64,
        width: 64,
        score: 500,
        health: 0
    }
]

export default class Powerups {
	constructor() {

        this.group = Engine.game.add.group();
		this.group.enableBody = true;
		this.group.physicsBodyType = Phaser.Physics.ARCADE;
		this.group.setAll('outOfBoundsKill', true);
		this.group.setAll('checkWorldBounds', true);

        this.spawnTime = 0;
	}

    spawn() {
        // get random type
        const powerupType = POWERUP_TYPES[Engine.game.rnd.integerInRange(0,POWERUP_TYPES.length-1)];

        // create powerup sprite
		let powerup = this.group.create(
			Engine.game.rnd.integerInRange(Engine.GAME_WIDTH * 0.20, Engine.GAME_WIDTH * 0.80),
			1,
			powerupType.sprite
		);

		powerup.body.gravity.y = 0;
		powerup.body.immovable = true;
        powerup.objectType = "powerup"; // clean this up
        powerup.config = powerupType;
		return powerup;
    }

    update() {
        if (this.spawnTime < Engine.levelTime && Engine.score > 3500) {
			let newSpawn = this.spawn();
            // set velocity and spawn timer based on score
            if (Engine.score < 8000) {
                this.spawnTime = Engine.levelTime + Engine.game.rnd.integerInRange(11,13);
                newSpawn.body.velocity.y = 100;
            } else if (Engine.score < 12000) {
                this.spawnTime = Engine.levelTime + Engine.game.rnd.integerInRange(8,10);
                newSpawn.body.velocity.y = 200;
            } else if (Engine.score < 30000) {
                this.spawnTime = Engine.levelTime + Engine.game.rnd.integerInRange(6,7);
                newSpawn.body.velocity.y = 300;
            } else {
                this.spawnTime = Engine.levelTime + Engine.game.rnd.integerInRange(2,4);
                newSpawn.body.velocity.y = 350;
            }
			
		} 
    }
}