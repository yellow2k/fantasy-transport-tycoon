export class ImageButton extends Phaser.GameObjects.Image {
  constructor(scene, x, y, texture, frame) {
    super(scene, x, y, texture, frame);
    this.setScale(2, 1.5);
    this.setInteractive({ useHandCursor: true })
      .on('pointerover', () => this.enterButtonHoverState() )
      .on('pointerout', () => this.enterButtonRestState() )
      .on('pointerdown', () => this.enterButtonActiveState() )
      .on('pointerup', () => this.enterButtonHoverState() );
  }

  enterButtonHoverState() {
    this.frame = this.scene.textures.getFrame('button', 0);
  }

  enterButtonRestState() {
    this.frame = this.scene.textures.getFrame('button', 1);
  }

  enterButtonActiveState() {
    this.frame = this.scene.textures.getFrame('button', 0);
  }
}
