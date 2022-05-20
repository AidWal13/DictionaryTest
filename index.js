import { Inventory , UserInventory , ShoppingListInventory } from '/Inventory.js';
import * as TradeGoods from '/TradeGoods.js';

//ACTUAL CODING -------------------------------------------------------------------------

let tradegoodChosen;
const UserInv = new UserInventory();
const NeededInv = new ShoppingListInventory();
let collectInputs = UserInv.collectInputs.bind(UserInv);

//get all buttons and add event listeners
let ingrButtons = document.querySelectorAll(".option");


ingrButtons.forEach((optionBtn) => {
    console.log(`Event Listener Added to: ${optionBtn}.`);
    optionBtn.addEventListener('click', moveOnTGSetTo);
});

//Functions

function moveOnTGSetTo(evt) {
  evt.currentTarget.parentElement.style.display ='none';
  evt.currentTarget.parentElement.nextElementSibling.style.display ='block';

  tradegoodChosen = evt.currentTarget.id;
  NeededInv.addGoodToInv(TradeGoods[tradegoodChosen]);
  
  TradeGoods[tradegoodChosen].ingredients.forEach((ingr) => {
    makeIngrInput(ingr);
  });
  
  addSubmitButton(evt.currentTarget.parentElement.nextElementSibling);
}

function makeIngrInput(ingredient) {
  //Create the label element
  let labelEl = document.createElement('label');
  labelEl.innerHTML = ingredient;
  labelEl.setAttribute('for', ingredient.replace(/\s/g, ''));
    
  //Create the input element
  let inputEl = document.createElement('input');
  inputEl.id = ingredient;
  inputEl.type = "number";
  inputEl.name = ingredient.replace(/\s/g, '');
  inputEl.classList.add('ingrInput');
  inputEl.placeholder = TradeGoods[tradegoodChosen][ingredient];
    
  
  let div = document.getElementById("divOfInputs");
  div.appendChild(labelEl);
  div.appendChild(inputEl);
  div.appendChild(document.createElement("br"));
}

function addSubmitButton(el) {
  let submitButton = document.createElement('input');
  submitButton.type = "submit";
  submitButton.id = "ingredientSubmit";
  submitButton.onclick = collectInputs;
  
  
  //let div = document.getElementById("divOfInputs");
  el.appendChild(document.createElement("br"));
  el.appendChild(submitButton);
}