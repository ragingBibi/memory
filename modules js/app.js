
function addElement() {
  // create a new div element
  const newDiv = document.createElement("div");

  // and give it some content
 /* const newContent = document.setAttribute("href", "democlass");

  // add the text node to the newly created div
  newDiv.appendChild(newContent);

  // add the newly created element and its content into the DOM
  const currentDiv = document.getElementById("div1");
  document.body.insertBefore(newDiv, currentDiv);*/
}




//---------------------------------------------------------------------------

let longueur=3;
let hauteur=4;

let x;

let nombreCartes= (longueur*hauteur);

document.getElementById("myButton").addEventListener("click", function () {

for (let index = 0; index < nombreCartes; index++) {
    
    x=Math.random()*(nombreCartes/2);

    switch (x) {
        case 1: document
          .getElementById("zone").addElement.setAttribute("href", "democlass");
            
            break;
    
        default:
            break;
    }
    
}
});



import { getData, saveData } from "./save";

const KEY = "users";

saveData(KEY, [{ name: "joe", email: "joe@bar.team" }]);

const users= getData(KEY);

console.log(users);
