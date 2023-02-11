import Obstacle from './ObstacleClass.js';

export default class MonstreAnime extends Obstacle {
    constructor(x, y, l, h, vy, image) {
        super(x, y, l, h, 'black');
        this.vy = vy;
        this.image = image;
    }

    draw(ctx) {
        ctx.drawImage(this.image, this.x, this.y, this.l, this.h);

        this.y += this.vy;
        // collision en bas
        if(this.y + this.h > ctx.canvas.height) {
            // On met l'obstacle au point de contact
            this.y = ctx.canvas.height - this.h;
            // et on inverse la vitesse
            this.vy = -this.vy;
        }
        // collision en haut
        if(this.y < 0) {
            // On met l'obstacle au point de contact
            this.y = 0;
            // et on inverse la vitesse
            this.vy = -this.vy;
        }
        
    }
}