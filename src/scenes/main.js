import { ImageButton } from '../game-objects/image-button';

export default class MainMenu extends Phaser.Scene {

    constructor () {
        super('MainMenu');
    }

    preload() {
        this.load.spritesheet('button', 'src/assets/ui/flixel-button.png', { frameWidth: 80, frameHeight: 20 });
        this.load.bitmapFont('nokia', 'src/assets/fonts/bitmap/nokia16black.png', 'src/assets/fonts/bitmap/nokia16black.xml');
    }

    create() {
        //Scene Title
        this.sceneTitle = this.add.text(10, 10, ['Main Menu']).setFontSize(18).setFontFamily('Trebuchet MS').setColor('#00ffff');
        
        //Navigation
        this.startButton = new ImageButton(this, 100, 50, 'button', 1);
        this.add.existing(this.startButton);
        this.startText = this.add.bitmapText(this.startButton.x - 40, this.startButton.y - 8, 'nokia', 'Start new game', 16);
        this.startText.x += (this.startButton.width - this.startText.width) / 2;
        this.startButton.on('pointerup', () => {
            this.scene.start("Game");
        });

        this.creditsButton = new ImageButton(this, this.startButton.x,  this.startButton.y + 35, 'button', 1);
        this.add.existing(this.creditsButton);
        this.creditsText = this.add.bitmapText(this.creditsButton.x - 40, this.creditsButton.y - 8, 'nokia', 'Credits', 16);
        this.creditsText.x += (this.creditsButton.width - this.creditsText.width) / 2;
        this.creditsButton.on('pointerup', () => {
            this.scene.start("Credits");
        });

    }
    
    update() {
    
    }
}