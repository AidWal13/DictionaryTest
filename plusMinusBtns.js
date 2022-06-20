export function addToTradeGoodCount() { //Changes the count
    let numberEls = document.getElementsByClassName("amtTradeGood");
    let actualNumber = parseInt(numberEls[0].innerText);
    actualNumber++;
    
    //need to use array from, because .forEach doesnt work on numberEls.  numberEls is an HTMLcollection
    Array.from(numberEls).forEach((el) => {
      el.innerText = actualNumber;
    })
  }

  export function addToIngrCount(tradegoodListObject, tradegood, shoppingListInventory) { //add to placeholder

    tradegood = tradegood.replace(/\s/g, '');
  
    if (tradegoodListObject[tradegood].baseLevel || !tradegoodListObject[tradegood]) {
  
      tradegoodListObject[tradegood].ingredients.forEach((ingr) => {
        
        //update the placeholders
        let inputEl = document.querySelector(`.ingrInputDiv #${ingr.replace(/\s/g, '')}RightDiv input`);
        let placeholderNumber = parseInt(inputEl.placeholder);
  
        placeholderNumber += tradegoodListObject[tradegood][ingr];
        inputEl.placeholder = placeholderNumber;
  
        //update the NeedInv with the new amount the user needs to satisfy their goals
        //Because of how the setters work, this HAS to be =, not +=, to work properly
        shoppingListInventory[ingr] = tradegoodListObject[tradegood][ingr];
  
      });
  
      return;
  
    } 
    else 
    {
  
      tradegoodListObject[tradegood].ingredients.forEach((ingr) => {
        addToIngrCount(tradegoodListObject, ingr, shoppingListInventory);
      });
  
    }
  }

  export function minusFromTradeGoodCount() {
    let numberEls = document.getElementsByClassName("amtTradeGood");
    let actualNumber = parseInt(numberEls[0].innerText);
    actualNumber--;
    if (actualNumber < 1) {
      actualNumber = 1;
    }
  
    Array.from(numberEls).forEach((el) => {
      el.innerText = actualNumber;
    })
  }

  export function minusFromIngrCount(tradegoodListObject, tradegood, shoppingListInventory) {
    tradegood = tradegood.replace(/\s/g, '');
  
    if (tradegoodListObject[tradegood].baseLevel || !tradegoodListObject[tradegood]) {
  
      tradegoodListObject[tradegood].ingredients.forEach((ingr) => {
        
        //update the placeholders
        let inputEl = document.querySelector(`.ingrInputDiv #${ingr.replace(/\s/g, '')}RightDiv input`);
        let placeholderNumber = parseInt(inputEl.placeholder);
  
        placeholderNumber -= tradegoodListObject[tradegood][ingr];
  
        if (placeholderNumber < tradegoodListObject[tradegood][ingr]) {
          placeholderNumber = tradegoodListObject[tradegood][ingr];
        }
        inputEl.placeholder = placeholderNumber;
  
        //update the NeedInv with the new amount the user needs to satisfy their goals
        //Because of how the setters work, this HAS to be =, not +=, to work properly
        
        shoppingListInventory[ingr] = -tradegoodListObject[tradegood][ingr];
  
        if (shoppingListInventory[ingr] < tradegoodListObject[tradegood][ingr]) {
            shoppingListInventory[ingr] = tradegoodListObject[tradegood][ingr];
        }
      });
  
      return;
  
    } 
    else 
    {
  
      tradegoodListObject[tradegood].ingredients.forEach((ingr) => {
        minusFromIngrCount(tradegoodListObject, ingr, shoppingListInventory);
      });
  
    }
  }