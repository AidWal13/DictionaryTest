import { Inventory , UserInventory , ShoppingListInventory, RemainingInventory } from './Inventory.js';
import * as TradeGoods from './TradeGoods.js';
import {addToTradeGoodCount, addToIngrCount, minusFromTradeGoodCount, minusFromIngrCount } from './plusMinusBtns.js';

//ACTUAL CODING -------------------------------------------------------------------------

let tradegoodChosen;
const NeededInv = new ShoppingListInventory();

//get all buttons and add event listeners
let ingrButtons = document.querySelectorAll(".option");

ingrButtons.forEach((optionBtn) => {
    optionBtn.addEventListener('click', (evt) => {
      let currentSection = evt.currentTarget.parentElement.parentElement.parentElement;
      currentSection.style.display ='none';
      currentSection.nextElementSibling.style.display ='block';
    
      tradegoodChosen = evt.currentTarget.id;

      //This updates the statement that reads out what you're making and gives you the option to decide how many
      updateCurrentlyMakingStatement(TradeGoods, tradegoodChosen);

      //This updates the list that will later be used to make sure only relevant ingredients are compared, and not all ingredients. 
      NeededInv.updateRelevantIngrs(TradeGoods, tradegoodChosen)

      //This updates the needed inventory with, as you might expect, what's needed
      NeededInv.addGoodToInv(TradeGoods, tradegoodChosen);
      
      createIngrInputs(TradeGoods, tradegoodChosen)

      //this says, go to the parent element of the option button, which is the current target that the event listener is attached to, then go to the next sibling.  Thats how it finds the right place to add the submit button. 
      addSubmitButton(currentSection.nextElementSibling);
    });
});


let plusBtn = document.getElementById('plus');
plusBtn.addEventListener('click', (evt) => {
  addBtnCallBack(TradeGoods, tradegoodChosen, NeededInv);
});


let minusBtn = document.getElementById('minus');
minusBtn.addEventListener('click', (evt) => {
  minusBtnCallBack(TradeGoods, tradegoodChosen, NeededInv);
} );


document.getElementById("helpButton").addEventListener('click', helpButtonActivate);




//Functions
function addBtnCallBack(evt) {
  addToTradeGoodCount();
  addToIngrCount(TradeGoods, tradegoodChosen, NeededInv);
  console.log(NeededInv);
}

function minusBtnCallBack(evt) {
  minusFromTradeGoodCount();
  minusFromIngrCount(TradeGoods, tradegoodChosen, NeededInv);
  console.log(NeededInv);
}

function updateCurrentlyMakingStatement(tradegoodListObject, tradegood) {
  let amtEls = document.getElementsByClassName("amtTradeGood");
  console.log(amtEls);
  Array.from(amtEls).forEach((el) => {
    el.innerHTML = '1';
  });

  let nameEls = document.getElementsByClassName("tradeGoodNameInputDiv");
  Array.from(nameEls).forEach((el) => {
    el.innerHTML = `${tradegoodListObject[tradegood].id}`;
  });
}



function createIngrInputs(tradegoodListObject, tradegood) { //function that uses the function, "makeIngrInput", to create all the inputs where the user will 
  tradegood = tradegood.replace(/\s/g, '');

  console.log(`Selected trade good ${tradegood}'s base level is ${tradegoodListObject[tradegood].baseLevel}`);

    if (tradegoodListObject[tradegood].baseLevel || !tradegoodListObject[tradegood]) {

      tradegoodListObject[tradegood].ingredients.forEach((ingr) => {
        
        console.log(`About to make input element for ${ingr}`);

        //ELEMENT IS MADE HERE
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


function makeIngrInput(tradegoodListObject, tradegood, ingredient) { // Actually makes the individual Inputs
  console.log(`Within Making the Input function: ${tradegoodListObject[tradegood].name}, ${ingredient.replace(/\s/g, '')}`);

  //if an input element exists with the id name of the ingredient input into this function, add to the placeholder and return
  if (document.querySelector(`#divOfInputs input#${ingredient.replace(/\s/g, '')}`)) {

    let alreadyCreatedEl = document.querySelector(`#divOfInputs input#${ingredient.replace(/\s/g, '')}`);

    console.log(`placeholder value = ${alreadyCreatedEl.placeholder}`)
    let currentPlaceholder = parseInt(alreadyCreatedEl.placeholder);

    currentPlaceholder = currentPlaceholder + tradegoodListObject[tradegood][ingredient];
    alreadyCreatedEl.placeholder = currentPlaceholder;

    return;

  } else {

    //Create the Div to contain input and label
    let newDiv = document.createElement('div');
    newDiv.classList.add('ingrInputDiv');

    //Get the image
    let imgEl = document.createElement('img');
    imgEl.src = `./assets/images/ingredients/${ingredient.replace(/\s/g, '')}.webp`;
    imgEl.classList.add('ingrPic');

    //Create the label element
    let labelEl = document.createElement('label');
    labelEl.innerHTML = ingredient;
    labelEl.setAttribute('for', ingredient.replace(/\s/g, ''));
      
    //Create the input element
    let inputEl = document.createElement('input');
    inputEl.id = ingredient.replace(/\s/g, '');
    inputEl.type = "number";
    inputEl.name = ingredient;
    inputEl.classList.add('ingrInput');
    inputEl.placeholder = tradegoodListObject[tradegood][ingredient];

    //Create the div to go on the right with the input and label
    let rightDivEl = document.createElement('div');
    rightDivEl.id = `${ingredient.replace(/\s/g, '')}RightDiv`;
    rightDivEl.classList.add('ingrInputRightDiv');

    //Add img input and label to div
    newDiv.appendChild(imgEl);
    rightDivEl.appendChild(labelEl);
    rightDivEl.appendChild(document.createElement("br"));
    rightDivEl.appendChild(inputEl);
    newDiv.appendChild(rightDivEl);

    //Append them to the page
    let div = document.getElementById("divOfInputs");
    div.appendChild(newDiv);
  }
}


function addSubmitButton(el) {
  let submitButton = document.createElement('input');
  submitButton.type = "submit";
  submitButton.id = "ingredientSubmit";
  submitButton.addEventListener("click", (evt) => {
    evt.currentTarget.parentElement.style.display ='none';
    evt.currentTarget.parentElement.nextElementSibling.style.display ='block';
    makeIngrResults();
  });
  
  //let div = document.getElementById("divOfInputs");
  el.appendChild(document.createElement("br"));
  el.appendChild(submitButton);
}


function makeIngrResults() {
  //This function needs to:
  //compare the needed and user inv
  //input the difference into remainingInv
  //create elements based on Relevantingrs
  //state whether more is needed or if the user has enough
  const UserInv = new UserInventory();
  const collectInputs = UserInv.collectInputs.bind(UserInv);
  
  collectInputs();

  const RemainingInv = new RemainingInventory();

  RemainingInv.updateRelevantIngrs(NeededInv);

  console.log(`after updated relevant ingrs of remaining inv`)
  console.log(RemainingInv);

  RemainingInv.updateWhatsRemaining(UserInv, NeededInv);

  RemainingInv.createResultElements(document.getElementById("divOfResults"), TradeGoods, tradegoodChosen);

}


function helpButtonActivate() {
  let relEl = document.getElementById("helpSection");

  if (relEl.style.display == "none") {
    relEl.style.display = 'block';
  } else if (relEl.style.display == "block") {
    relEl.style.display = "none";
  }
}