import { runGame } from "./game";

function startGame() {
    // Run game with chosen game options                
    runGame({
        // backgroundColor: "#a9d8e8",
        backgroundColor: "#1c0000",
        backgroundImage: "/assets/environment.png",
        // music: "/assets/music/green-zone.mp3",
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
        }
    })

    // Focus keyboard on canvas
    var gameEl = document.getElementById("game")
    if (gameEl) { 
        gameEl.focus() 
    }
}
window.onload = function() {
    startGame()
}