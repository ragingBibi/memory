/*let longueur=3;
let hauteur=4;

let x;

let nombreCartes= (longueur*hauteur);


console.log(nombreCartes);

for (let index = 0; index < nombreCartes; index++) {
    
    x=Math.random()*(nombreCartes/2);

    switch (x) {
        case 1:
            
            break;
    
        default:
            break;
    }
    
}*/

import { getData, saveData } from "./save";

const KEY = "users";

saveData(KEY, [{ name: "joe", email: "joe@bar.team" }]);

const users= getData(KEY);

console.log(users);
