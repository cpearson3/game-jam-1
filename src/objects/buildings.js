const BUILDING_TYPES = [
    {
        sprite: "building-deco",
        height: 400,
        width: 250,
        health: 10,
    },
    {
        sprite: "small-building",
        height: 350,
        width: 390,
        health: 6,
    },
    {
        sprite: "pyramid-tower",
        height: 600,
        width: 200,
        health: 8,
    },
    {
        sprite: "tower-clock",
        height: 400,
        width: 144,
        health: 8
    },
    {
        sprite: "small-tower",
        height: 300,
        width: 300,
        health: 6
    },
    {
        sprite: "warehouse",
        height: 291,
        width: 350,
        health: 8
    }
]

export default class Buildings {
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
        const buildingType = BUILDING_TYPES[Engine.game.rnd.integerInRange(0,BUILDING_TYPES.length-1)];

        // create building sprite
		let building = this.group.create(
			Engine.GAME_WIDTH - 1,
			Engine.GAME_HEIGHT - buildingType.height,
			buildingType.sprite
		);

		building.body.gravity.y = 0;
		building.body.immovable = true;
		// building.body.moves = false;
		building.body.velocity.x = -Engine.GAME_SPEED;
        building.health = buildingType.health;
        building.objectType = "building"; // clean this up
		return building;
    }

    update() {
        if (this.spawnTime < Engine.levelTime) {
			this.spawn();
			this.spawnTime = Engine.levelTime + Engine.game.rnd.integerInRange(3,4)
		} 
    }
}