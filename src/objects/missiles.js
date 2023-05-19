import { getRandomItem } from "../utils";

const MISSLE_TYPES = [
    {
        sprite: "missile",
        height: 28,
        width: 105,
        health: 2,
        speed: 250,
        damage: 15,
    },
    {
        sprite: "missile-vertical",
        height: 75,
        width: 69,
        health: 2,
        speed: 66,
        damage: 15,
    }
];
export default class Missiles {
	constructor() {

        this.group = Engine.game.add.group();
		this.group.enableBody = true;
		this.group.physicsBodyType = Phaser.Physics.ARCADE;
		// this.group.setAll('outOfBoundsKill', true);
		this.group.setAll('checkWorldBounds', true);

        this.spawnTime = 0;
	}

    spawn() {
        // get random type
        const missileType = getRandomItem(MISSLE_TYPES);

		// set position
        let vx, vy;

        if (missileType.sprite == 'missile') {
            // horizontal
            // fires from left
            vx = 0 - missileType.width / 2;
            vy = Engine.GAME_HEIGHT * (Engine.game.rnd.integerInRange(35,65) / 100);
        } else{
            // vertical "missle" 
            // fall more on the right side
            vx = Engine.GAME_WIDTH * (Engine.game.rnd.integerInRange(33,85) / 100);
            vy = 0 - missileType.height / 2;
        }
		
		

        // create missle sprite
		let missle = this.group.create(
			vx,
			vy,
			missileType.sprite
		);

		missle.body.gravity.y = 0;
		missle.body.immovable = true;
		// missle.body.moves = false;
		missle.body.velocity.x = missileType.sprite == "missile" ? missileType.speed : 0;
        missle.body.velocity.y= missileType.sprite == "missile-vertical" ? missileType.speed : 0;
        missle.health = missileType.health;
		missle.config = missileType;
		missle.objectType = "missle";

        // play sound - todo: enum
        Engine.sounds["missile"].play();

		return missle;
    }

    update() {
        if (this.spawnTime < Engine.levelTime && Engine.score > 4000) {
			this.spawn();
            if (Engine.score < 8000) {
                this.spawnTime = Engine.levelTime + Engine.game.rnd.integerInRange(6,8);
            } else if (Engine.score < 12000) {
                this.spawnTime = Engine.levelTime + Engine.game.rnd.integerInRange(5,6);
            } else if (Engine.score < 30000) {
				this.spawnTime = Engine.levelTime + Engine.game.rnd.integerInRange(3,4);
			} else {
				this.spawnTime = Engine.levelTime + 1;
			}
			
		} 
    }

}