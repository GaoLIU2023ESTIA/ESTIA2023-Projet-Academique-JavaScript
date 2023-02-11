import Obstacle from './ObstacleClass.js';

export default class MonstreAnime extends Obstacle {
    constructor(x, y, l, h, vx, image) {
        super(x, y, l, h, 'black');
        this.vx = vx;
        this.image = image;
    }

    draw(ctx) {
        ctx.drawImage(this.image, this.x, this.y, this.l, this.h);

        this.x += this.vx;
        // collision en bas
        if(this.x + this.l > ctx.canvas.width) {
            // On met l'obstacle au point de contact
            this.x = ctx.canvas.width - this.l;
            // et on inverse la vitesse
            this.vx = -this.vx;
        }
        // collision en haut
        if(this.x < 0) {
            // On met l'obstacle au point de contact
            this.x = 0;
            // et on inverse la vitesse
            this.vx = -this.vx;
        }
        
    }
}