

export default class Particles {
    constructor() {
        // Create the particle emiiters
        this.splat = Engine.game.add.emitter(0, 0, 250);
        // Set the 'pixel' image for the particles
        this.splat.makeParticles('pixel');
        // The speed will be randomly picked between -100 and 25 for each particle
        this.splat.setYSpeed(-500, 500);
        // Do the same for the x speed
        this.splat.setXSpeed(-500, 500);
        // Use some gravity for the particles
        this.splat.gravity = Engine.gravity / 2;
        this.splat.setAlpha(0.6, 0, 1000);
        this.splat.setScale(2.15, 0.5, 2.15, 0.5, 1000);

        // // smoke effect
        this.smoke = Engine.game.add.emitter(0, 0, 125);
        this.smoke.makeParticles('smoke');
        this.smoke.setYSpeed(-250, 250);
        this.smoke.setXSpeed(-350, 50);
        this.smoke.setAlpha(1, 0, 2000);
        this.smoke.setScale(3.5, 0, 3.5, 0, 2000);

        // // dust effect
        this.dust = Engine.game.add.emitter(0, 0, 125);
        this.dust.makeParticles('dust');
        this.dust.setYSpeed(-500, 500);
        this.dust.setXSpeed(-500, 250);
        this.dust.setAlpha(0.75, 0, 2000);
        this.dust.setScale(2, 0, 2, 0, 2000);

        // Puff
        this.puff = Engine.game.add.emitter(0, 0, 100);
        this.puff.makeParticles('puff');
        this.puff.setYSpeed(-250, 250);
        this.puff.setXSpeed(-350, 350);
        this.puff.setAlpha(0.75, 0, 750);
        this.puff.setScale(0, 1, 0, 1, 750);

        // small explosion particles
        this.smallSmoke = Engine.game.add.emitter(0, 0, 250);
        this.smallSmoke.makeParticles('smoke');
        this.smallSmoke.setYSpeed(-100, 100);
        this.smallSmoke.setXSpeed(-100, 100);
        this.smallSmoke.setAlpha(1, 0, 1000);
        this.smallSmoke.setScale(0, 3, 0, 3, 1000);

        // big explosion
        this.bigSmoke = Engine.game.add.emitter(0, 0, 12);
        this.bigSmoke.makeParticles('smoke');
        this.bigSmoke.setYSpeed(-600, 600);
        this.bigSmoke.setXSpeed(-600, 600);
        this.bigSmoke.setAlpha(1, 0, 2500);
        this.bigSmoke.setScale(7.5, 0, 7.5, 0, 2500);

        // stars explosion particles
        this.stars = Engine.game.add.emitter(0, 0, 50);
        this.stars.makeParticles('yellow-star');
        this.stars.setYSpeed(-300, 300);
        this.stars.setXSpeed(-300, 300);
        this.stars.setAlpha(1, 0, 2000);
        this.stars.setScale(0.25, 2, 0.25, 2, 2000);

    }
	startExplosion(emitter, x, y) {
        emitter.x = x;
        emitter.y = y;
        emitter.start(true, 2000, null, 24);
        return;
    }
    startSmallExplosion(emitter, x, y) {
        emitter.x = x;
        emitter.y = y;
        emitter.start(true, 1000, null, 12);
        return;
    }
    startDamageEmission(emitter, x, y) {
        emitter.x = x;
        emitter.y = y;
        emitter.start(true, 2000, null, 9);
        return;
    }
    startSplat(emitter, x, y) {
        emitter.x = x;
        emitter.y = y;
        if (Engine.splatter > 0) {
            let splatter = 6 * Engine.splatter;
            emitter.start(true, 600, null, splatter);
        }
    }
    startCrumble(emitter,x,y) {
        emitter.x = x;
        emitter.y = y;
        emitter.start(true, 1240, null, 10);
    }
}