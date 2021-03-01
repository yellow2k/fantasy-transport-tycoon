import { ImageButton } from '../game-objects/image-button';

export default class Credits extends Phaser.Scene {

    constructor () {
        super('Credits');
    }

    preload() {
        this.load.spritesheet('button', 'src/assets/ui/flixel-button.png', { frameWidth: 80, frameHeight: 20 });
        this.load.bitmapFont('nokia', 'src/assets/fonts/bitmap/nokia16black.png', 'src/assets/fonts/bitmap/nokia16black.xml');
    }

    create() {
    	//Scene Title
        this.sceneTitle = this.add.text(10, 10, ['Credits']).setFontSize(18).setFontFamily('Trebuchet MS').setColor('#00ffff');
        
        //Navigation
        this.mainmenuButton = new ImageButton(this, 100, 50, 'button', 1);
        this.add.existing(this.mainmenuButton);
        this.mainmenuText = this.add.bitmapText(this.mainmenuButton.x - 40, this.mainmenuButton.y - 8, 'nokia', 'to Main Menu', 16);
        this.mainmenuText.x += (this.mainmenuButton.width - this.mainmenuText.width) / 2;
        
        this.mainmenuButton.on('pointerup', () => {
            this.scene.start("MainMenu");
        });    

    }
    
    update() {
    
    }
}