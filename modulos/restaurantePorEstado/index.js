import restaurantes from './restaurantes.js';
import {retornaRestaurantesRJ, retornaRestaurantesSP} from './retornaRestaurantes.js';

let estado = 'RJ';
let retornaRestaurantes;

switch(estado){
    case 'RJ':
        retornaRestaurantes = restaurantes.filter(retornaRestaurantesRJ);
        break;
    case 'SP':
        retornaRestaurantes = restaurantes.filter(retornaRestaurantesSP);
        break;
}

retornaRestaurantes.forEach(restaurante => {
	console.log(restaurante.nome);
});