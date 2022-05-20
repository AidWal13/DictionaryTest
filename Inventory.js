export class Inventory {
  
  constructor() {
    Inventory.buildCount++;
    this["_sulphurine"] = 0;
    this['_condensed carbon'] = 0;
  }
  
  //Getters & Setters for ingredients
  get sulphurine() {
    return this['_sulphurine'];
  }
  
  set sulphurine(amt) {
    if (typeof amt === 'number'){
      this._sulphurine += amt;
      if (this._sulphurine <= 0) {
        this._sulphurine = 0;
      }
    } else {
      console.log("Failure to assign sulphurine.  Check input type");
    }
  }
  
  get 'condensed carbon'() {
    return this["_condensed carbon"];
  }
  
  set 'condensed carbon'(amt) {
    if (typeof amt === 'number'){
      this["_condensed carbon"] += amt;
      if (this["_condensed carbon"] <= 0) {
        this["_condensed carbon"] = 0;
      }
    } else {
      console.log("failure to assign condensed carbon.  Check input type");
    }
  }
  
  //STATIC ELEMENTS
  
  static haveEnoughOf(ingredient, ingredientInventory, userInventory) {
    let val = userInventory[ingredient] - ingredientInventory[ingredient];
    if (val >= 0) {
      return true;
    } else {
      return false;
    }
  }
  
}


export class ShoppingListInventory extends Inventory { 
  constructor() {
    super()
  }
  
  addGoodToInv(tradegood) {
    tradegood.ingredients.forEach((ingr) => {
      this[ingr] = tradegood[ingr];
    })
  }
}


export class UserInventory extends Inventory {
  constructor() {
    super()
  }
  
  haveEnoughOf(ingr) {
    let dif = this[ingr] - NeededInv[ingr];
    if (dif < 0) {
      return false;
    } else if (dif >= 0) {
      return true;
    }
  }
  
  collectInputs() {
    let relevantInputs = document.querySelectorAll("#divOfInputs .ingrInput");
    
    relevantInputs.forEach((input) => {
      let inputtedValue = parseInt(input.value);
      let ingr = input.id;
      this[ingr] = inputtedValue;
    });
  }
}