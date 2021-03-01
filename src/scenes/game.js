import Card from '../helpers/card';
import Zone from '../helpers/zone';
//import io from 'socket.io-client';
//import Dice from '../helpers/dice';
import { ImageButton } from '../game-objects/image-button';

export default class Game extends Phaser.Scene {
    constructor() {
        super({
            key: 'Game'
        });
    }

    preload() {
        this.load.image('cyanCardFront', 'src/assets/CyanCardFront.png');
        this.load.image('cyanCardBack', 'src/assets/CyanCardBack.png');
        this.load.image('magentaCardFront', 'src/assets/MagentaCardFront.png');
        this.load.image('magentaCardBack', 'src/assets/MagentaCardBack.png');
        this.load.atlas('dice', 'src/assets/dice.png', 'src/assets/dice.json',Phaser.Loader.TEXTURE_ATLAS_JSON_HASH);
    }

    create() {

        let self = this;

        //Scene Title        
        this.sceneTitle = this.add.text(10, 10, ['Game']).setFontSize(18).setFontFamily('Trebuchet MS').setColor('#00ffff');

        //Navigation
        this.mainmenuButton = new ImageButton(this, 100, 50, 'button', 1);
        this.add.existing(this.mainmenuButton);
        this.mainmenuText = this.add.bitmapText(this.mainmenuButton.x - 40, this.mainmenuButton.y - 8, 'nokia', 'to Main Menu', 16);
        this.mainmenuText.x += (this.mainmenuButton.width - this.mainmenuText.width) / 2;
        
        this.mainmenuButton.on('pointerup', () => {
            this.scene.start("MainMenu");
        });  

        //Game Actions
        this.visitCityButton = new ImageButton(this, 270, 50, 'button', 1);
        this.add.existing(this.visitCityButton);
        this.visitcityText = this.add.bitmapText(this.visitCityButton.x - 40, this.visitCityButton.y - 8, 'nokia', 'Visit City', 16);
        this.visitcityText.x += (this.visitCityButton.width - this.visitCityButton.width) / 2;
        
        this.visitCityButton.on('pointerup', () => {
            //self.dealCards();
        });

        this.dealcardsButton = new ImageButton(this, 440, 50, 'button', 1);
        this.add.existing(this.dealcardsButton);
        this.mainmenuText = this.add.bitmapText(this.dealcardsButton.x - 40, this.dealcardsButton.y - 8, 'nokia', 'Deal Cards', 16);
        this.mainmenuText.x += (this.dealcardsButton.width - this.dealcardsButton.width) / 2;
        
        this.dealcardsButton.on('pointerup', () => {
            self.dealCards();
        });

		

        this.zone = new Zone(this);
        this.dropZone = this.zone.renderZone();
        this.outline = this.zone.renderOutline(this.dropZone);

		this.dealCards = () => {
        	for (let i = 0; i < 5; i++) {
                let playerCard = new Card(this);
                playerCard.render(475 + (i * 100), 500, 'cyanCardFront');
            }
    	}

        this.input.on('drag', function (pointer, gameObject, dragX, dragY) {
            gameObject.x = dragX;
            gameObject.y = dragY;
        })

        this.input.on('dragstart', function (pointer, gameObject) {
            gameObject.setTint(0xff69b4);
            self.children.bringToTop(gameObject);
        })

        this.input.on('dragend', function (pointer, gameObject, dropped) {
            gameObject.setTint();
            if (!dropped) {
                gameObject.x = gameObject.input.dragStartX;
                gameObject.y = gameObject.input.dragStartY;
            }
        })

        this.input.on('drop', function (pointer, gameObject, dropZone) {
            dropZone.data.values.cards++;
            gameObject.x = (dropZone.x - 400) + (dropZone.data.values.cards * 50);
            gameObject.y = dropZone.y;
            gameObject.disableInteractive();
        })

/*        
        var d;
        this.addDice = () => {
            d = new Dice(game.world.centerX, game.world.centerY);
            d.inputEnabled = true;
            d.events.onInputDown.add(this.rollDice, this);
        },
        this.rollDice = (type) => {
            d.enableDice();
            d.roll();
        },
        this.rollDiceComplete = () => {
            d.disableDice();
        }
        self.addDice();
*/
    }
    
    update() {
    
    }
}