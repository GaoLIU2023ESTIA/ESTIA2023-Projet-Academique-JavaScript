import Sortie from "./Sortie.js";
import ObstacleAnimeClignotant from "./ObstacleAnimeClignotant.js";
import ObstacleAnime from "./ObstacleAnime.js";
import Obstacle from "./ObstacleClass.js";
import ObstacleTexture from "./ObstacleTexture.js";
import Coin from "./Coin.js";
import MonstreAnime from "./MonstreAnime.js";
import MushroomAnime from "./MushroomAnime.js";


let tabNiveaux = [];

function creerLesNiveaux(assets) {
    let sortieLevel1 = new Sortie(500, 500, 50, "yellow");

    let level1 = {
        objetsGraphiques: [
            sortieLevel1,
            new Coin(100, 100, 50, 50, assets.coin, 10),
            new Coin(200, 150, 50, 50, assets.coin, 10),
            new Coin(400, 300, 50, 50, assets.coin, 10),
            new MushroomAnime(150, 200, 50, 50, 3, assets.mushroom),
            new MonstreAnime (150, 100, 50, 50, 2, assets.monstre),
        ],
        temps: 60,
        sortie : sortieLevel1,
        titre : "Niveau 1",
        description: "Souffre petit padawan !",
        background: "pattern1",
        musique: "xmas"
    }
    tabNiveaux.push(level1);
    
    let sortieLevel2 = new Sortie(600, 300, 40, "orange");
    let level2 = {
        objetsGraphiques: [
            sortieLevel2,
            new ObstacleAnime(450, 0, 30, 300, 'green', 1),
            new Coin(200, 150, 50, 50, assets.coin, 10),
            new Coin(400, 300, 50, 50, assets.coin, 10),
            new MonstreAnime (150, 100, 50, 50, 1, assets.monstre),
        ],
        sortie: sortieLevel2,
        temps: 30,
        titre : "Niveau 2",
        description: "Ne te laisse pas faire !",
        background: "bgn2",
        musique: "humbug"
    }
    tabNiveaux.push(level2);

    let sortieLevel3 = new Sortie(600, 300, 40, "orange");
    let level3 = {
        objetsGraphiques: [
            sortieLevel3,
            new ObstacleAnimeClignotant(450, 0, 30, 300, 'green', 1),
            new Coin(200, 150, 50, 50, assets.coin, 10),
            new Coin(500, 300, 50, 50, assets.coin, 10),
            new MonstreAnime (350, 100, 50, 50, 1, assets.monstre),
        ],
        sortie: sortieLevel3,
        temps: 30,
        titre : "Niveau 3",
        description: "Ne te laisse pas faire !",
        background: "bgn2",
        musique: "humbug"
    }
    tabNiveaux.push(level3);
}


export { creerLesNiveaux, tabNiveaux }