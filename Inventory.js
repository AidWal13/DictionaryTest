export class Inventory {
  
  constructor() {
    this['_ammonia'] = 0;
    this['_condensed carbon'] = 0;
    this['_ionised cobalt'] = 0;
    this['_phosphorus'] = 0;
    this['_pure ferrite'] = 0;
    this['_pyrite'] = 0;
    this["_sulphurine"] = 0;
    this['_uranium'] = 0;
  }
  
//Getters & Setters for ingredients

  //AMMONIA-------------------------------------------
  get ammonia() {
    return this._ammonia;
  }
  
  set 'ammonia'(amt) {
    if (typeof amt === 'number'){
      this["_ammonia"] += amt;
      if (this["_ammonia"] <= 0) {
        this["_ammonia"] = 0;
      }
    } else {
      console.log("failure to assign ammonia.  Check input type");
    }
  }

  //CONDENSED CARBON-------------------------------------------
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
  //PURE FERRITE-------------------------------------------
  get 'pure ferrite'() {
    return this['_pure ferrite'];
  }
  
  set 'pure ferrite'(amt) {
    if (typeof amt === 'number'){
      this["_pure ferrite"] += amt;
      if (this["_pure ferrite"] <= 0) {
        this["_pure ferrite"] = 0;
      }
    } else {
      console.log("failure to assign ammonia.  Check input type");
    }
  }

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
  
  addGoodToInv(tradegoodListObject, tradegood) {
    if (tradegood.baseLevel) {

      tradegood.ingredients.forEach((ingr) => {
        this[ingr] = tradegood[ingr];
      });

    } else {

      console.log(`The tradegood that isnt base level is: ${tradegood.name}`)

      //for each ingredient of the inputted Trade Good
      tradegood.ingredients.forEach((subIngr) => {

        //take care of cases where the name is two words with a space
        subIngr = subIngr.replace(/\s/g, '');

        console.log(`Console.logging the tradegoodListObject[subIngr]: ${tradegoodListObject[subIngr].name}`);

        tradegoodListObject[subIngr].ingredients.forEach((subsubingr) => {
          console.log(`${subsubingr} is being assigned ${tradegoodListObject[subIngr][subsubingr]}`)
          this[subsubingr] = tradegoodListObject[subIngr][subsubingr];
        });
      });

      console.log(this);
    }
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
    console.log(relevantInputs);

    relevantInputs.forEach((input) => {
      let inputtedValue = parseInt(input.value);
      let ingr = input.id;
      this[ingr] = inputtedValue;
    });
    console.log(this);
  }
}