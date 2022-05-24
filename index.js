import { Inventory , UserInventory , ShoppingListInventory } from './Inventory.js';
import * as TradeGoods from './TradeGoods.js';

//ACTUAL CODING -------------------------------------------------------------------------

let tradegoodChosen;
const UserInv = new UserInventory();
const NeededInv = new ShoppingListInventory();
const collectInputs = UserInv.collectInputs.bind(UserInv);

//get all buttons and add event listeners
let ingrButtons = document.querySelectorAll(".option");


ingrButtons.forEach((optionBtn) => {
    optionBtn.addEventListener('click', (evt) => {
      evt.currentTarget.parentElement.style.display ='none';
      evt.currentTarget.parentElement.nextElementSibling.style.display ='block';
    
      tradegoodChosen = evt.currentTarget.id;

      //This updates the needed inventory with, as you might expect, what's needed
      NeededInv.addGoodToInv(TradeGoods, tradegoodChosen);
      
      createIngrInputs(TradeGoods, tradegoodChosen)
      //This creates all the inputs in the html file
      /*TradeGoods[tradegoodChosen].ingredients.forEach((ingr) => {
        makeIngrInput(ingr);
      });*/

      //this says, go to the parent element of the option button, which is the current target that the event listener is attached to, then go to the next sibling.  Thats how it finds the right place to add the submit button. 
      addSubmitButton(evt.currentTarget.parentElement.nextElementSibling);
    });
});






//Functions

function createIngrInputs(tradegoodListObject, tradegood) {
  tradegood = tradegood.replace(/\s/g, '');
    console.log(`Selected trade good ${tradegood}'s base level is ${tradegoodListObject[tradegood].baseLevel}`);

    if (tradegoodListObject[tradegood].baseLevel || !tradegoodListObject[tradegood]) {

      tradegoodListObject[tradegood].ingredients.forEach((ingr) => {
        
        console.log(`About to make input element for ${ingr}`);

        //ACTUAL ASSIGNMENT OCCURS HERE
        //Because of how the setters work, this HAS to be =, not +=, to work properly
        makeIngrInput(tradegoodListObject, tradegood, ingr);

        console.log(`Made input for ${ingr}.`);

      });

      return;

    } 
    else 
    {

      tradegoodListObject[tradegood].ingredients.forEach((ingr) => {
        createIngrInputs(tradegoodListObject, ingr);
      });

    }
}

function makeIngrInput(tradegoodListObject, tradegood, ingredient) {
  console.log(`Within Making the Input function: , ${tradegoodListObject[tradegood].name}, ${ingredient}`);

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
    
  inputEl.placeholder = tradegoodListObject[tradegood][ingredient];
  
  let div = document.getElementById("divOfInputs");
  div.appendChild(labelEl);
  div.appendChild(inputEl);
  div.appendChild(document.createElement("br"));
}

function addSubmitButton(el) {
  let submitButton = document.createElement('input');
  submitButton.type = "submit";
  submitButton.id = "ingredientSubmit";
  submitButton.addEventListener("click", collectInputs);
  submitButton.addEventListener("click", testFunc);
  
  //let div = document.getElementById("divOfInputs");
  el.appendChild(document.createElement("br"));
  el.appendChild(submitButton);
}

function testFunc() {
  console.log('within test function');
}














//PROVERBIAL TRASH

function moveOnTGSetTo(evt) {
  evt.currentTarget.parentElement.style.display ='none';
  evt.currentTarget.parentElement.nextElementSibling.style.display ='block';

  tradegoodChosen = evt.currentTarget.id;
  NeededInv.addGoodToInv(TradeGoods, TradeGoods[tradegoodChosen]);
  
  TradeGoods[tradegoodChosen].ingredients.forEach((ingr) => {
    makeIngrInput(ingr);
  });
  
  //this says, go to the parent element of the option button, which is the current target that the event listener is attached to, then go to the next sibling.  Thats how it finds the right place to add the submit button. 
  addSubmitButton(evt.currentTarget.parentElement.nextElementSibling);
}
