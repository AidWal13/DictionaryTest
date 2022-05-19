import { Inventory , UserInventory , ShoppingListInventory } from '/Inventory.js';
import * as TradeGoods from '/TradeGoods.js';

let tradegoodChosen;
const UserInv = new UserInventory();
const NeededInv = new ShoppingListInventory();

//get all buttons and add event listeners
let ingrButtons = document.querySelectorAll(".option");
ingrButtons.forEach((optionBtn) => {
    optionBtn.addEventListener('click', moveOnTGSetTo);
});


console.log(TradeGoods['thermiccondensate']);


//Functions

function moveOnTGSetTo(evt) {
  evt.currentTarget.parentElement.style.display ='none';
  evt.currentTarget.parentElement.nextElementSibling.style.display ='block';

  tradegoodChosen = evt.currentTarget.id;
  NeededInv.addGoodToInv(TradeGoods[tradegoodChosen]);
  
  TradeGoods[tradegoodChosen].ingredients.forEach((ingr) => {
    makeIngrInput(ingr);
  });
}

function makeIngrInput(ingredient) {
    let labelEl = document.createElement('label');
    labelEl.innerHTML = ingredient;
    labelEl.setAttribute('for', ingredient.replace(/\s/g, ''));
    let div = document.getElementById("divOfInputs");
    div.appendChild(labelEl);
}

