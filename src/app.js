import WebFont from 'webfontloader';
import { runGame } from "./game";

window.onload = function() {

    const gameEl = document.querySelector('#game');
    // // Disable contextmenu
    gameEl.oncontextmenu = () => false;

    // load font for in-game use
    WebFont.load({
        google: {
          families: ['VT323']
        }
    });

    // Run game with chosen game options                
    runGame({
        backgroundColor: "#1c0000",
        backgroundImage: "assets/environment.png",
        playerData: {
            "name": "OG MetaBoy #8847",
            "sprite": "assets/player-base.png",
            "leftFrame": 11,
            "rightFrame": 12,
            "frameHeight": 483,
            "frameWidth": 320,
            "frames": 24,
            "frameRate": 24,
            "speedFactor": 1.05,
            "jumpFactor": 0.983
        },
        gravity: 2500
    })
}
