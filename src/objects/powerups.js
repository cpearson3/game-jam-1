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
		// powerup.body.moves = false;
		powerup.body.velocity.y = 350;
        powerup.objectType = "powerup"; // clean this up
        powerup.config = powerupType;
		return powerup;
    }

    update() {
        if (this.spawnTime < Engine.levelTime && Engine.score > 4000) {
			this.spawn();
            if (Engine.score < 8000) {
                this.spawnTime = Engine.levelTime + Engine.game.rnd.integerInRange(11,13);
            } else if (Engine.score < 12000) {
                this.spawnTime = Engine.levelTime + Engine.game.rnd.integerInRange(8,10);
            } else if (Engine.score < 30000) {
                this.spawnTime = Engine.levelTime + Engine.game.rnd.integerInRange(6,7);
            } else {
                this.spawnTime = Engine.levelTime + Engine.game.rnd.integerInRange(3,5);
            }
			
		} 
    }
}