// Import game states
import bootState from './states/boot'
import loadState from './states/load'
import menuState from './states/menu'
import playState  from './states/play'

import { UAParser } from 'ua-parser-js';

let Engine = {
	running: false,
	TILESIZE: 128,
	GAME_SPEED: 150,
	SCROLL_SPEED: 50,
	GAME_HEIGHT: 0,
	GAME_WIDTH: 0,
	BASE_URL: "",
	GAME_MODES: {
		RUN: 1,
		BOSS: 2
	}
};

// Get global Phaser object (loaded via CDN)
const Phaser = window.Phaser;

function setCavasSize() {
	Engine.GAME_WIDTH = 1280;
	Engine.GAME_HEIGHT = 720;
}

/*
* Run the game
* @params {Object} gameOptions	Campaign and map data
*/
export function runGame(gameOptions) {

	// Welcome the user
	console.log(`Welcome to my Metaboy Game Jam submission.`)
	let uap = new UAParser();
	Engine.device = uap.getDevice();
	
	
	Engine.gameMode = Engine.GAME_MODES.RUN;
	Engine.backgroundColor = gameOptions.backgroundColor;
	Engine.backgroundImage = gameOptions.backgroundImage;
	Engine.backgroundMusic = gameOptions.music;
	Engine.splatter = 1;
	
	Engine.gravity = 2500;
	Engine.playerData = gameOptions.playerData;
	Engine.weaponData = gameOptions.weaponData;
	Engine.walletAddress = gameOptions.walletAddress;

	// Set up global sounds
	Engine.sounds = {};
	Engine.muteStatus = gameOptions.muted;

	// Initialize in-game counters
	Engine.deaths = 0;
	Engine.levelDeaths = 0;
	Engine.levelTime = 0;

	setCavasSize();
	Engine.game = new Phaser.Game(Engine.GAME_WIDTH, Engine.GAME_HEIGHT, Phaser.AUTO, 'game');
	
	// Initial game sound settings
	Engine.musicPlaying = false;

	// Add all the states
	Engine.game.state.add('boot', bootState);
	Engine.game.state.add('load', loadState);
	Engine.game.state.add('menu', menuState);
	Engine.game.state.add('play', playState);

	// Set current campaign
	Engine.campaign = gameOptions.campaign;

	// Set run state
	Engine.running = true;

	// Start the 'boot' state
	Engine.game.state.start('boot');

	// export global game object
	window.Engine = Engine;
}

