import { Inventory , UserInventory , ShoppingListInventory } from '/Inventory.js';
import * as TradeGoods from '/TradeGoods.js';

let tradegoodChosen;
const UserInv = new UserInventory();
const NeededInv = new ShoppingListInventory();

//Add event listeners to the options buttons so that when they are clicked, tradegoodchosen is assigned
let ingrButtons = document.querySelectorAll(".option");

ingrButtons.forEach((optionBtn) => {
    optionBtn.addEventListener('click', moveOnTGSetTo);
});










function moveOnTGSetTo(evt) {
    console.log(`Within the event listener for TG: ${evt.currentTarget.id}.`)
    tradegoodChosen = evt.currentTarget.id;
    NeededInv.addGoodToInv(TradeGoods[tradegoodChosen]);
    console.log(NeededInv);
}