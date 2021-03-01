import Phaser from "phaser";
//import Game from "./scenes/game";
import MainMenu from "./scenes/main";
import Credits from "./scenes/credits";
import Game from "./scenes/game";

var config = {
    type: Phaser.AUTO,
    parent: "phaser-example",
    width: 1240,
    height: 580,
    scene: [
        MainMenu,
        Credits,
        Game
    ]
};

var game = new Phaser.Game(config);

