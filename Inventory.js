export class Inventory {
  
  constructor() {
    this['_ammonia'] = 0; //GS done
    this['_condensed carbon'] = 0; //GS done
    this['_dioxite'] = 0; //GS done
    this['_faecium'] = 0; //GS done
    this['_frost crystal'] = 0; //GS done
    this['_gamma root'] = 0; //GS done
    this['_ionised cobalt'] = 0; //GS done
    this['_nitrogen'] = 0; //GS done
    this['_paraffinium'] = 0; //GS done
    this['_phosphorus'] = 0; //GS done
    this['_pure ferrite'] = 0; //GS done
    this['_pyrite'] = 0; //GS done
    this['_radon'] = 0; //GS done
    this['_solanium'] = 0; //GS done
    this["_sulphurine"] = 0; //GS done
    this['_uranium'] = 0; //GS done
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

  //DIOXITE-------------------------------------------
  get dioxite() {
    return this._dioxite;
  }
  
  set dioxite(amt) {
    if (typeof amt === 'number'){
      this["_dioxite"] += amt;
      if (this["_dioxite"] <= 0) {
        this["_dioxite"] = 0;
      }
    } else {
      console.log("failure to assign dioxite.  Check input type");
    }
  }

  //FAECIUM-------------------------------------------
  get faecium() {
    return this._faecium;
  }
  
  set faecium(amt) {
    if (typeof amt === 'number'){
      this["_faecium"] += amt;
      if (this["_faecium"] <= 0) {
        this["_faecium"] = 0;
      }
    } else {
      console.log("failure to assign faecium.  Check input type");
    }
  }

  //FROST CRYSTAL-------------------------------------------
  get 'frost crystal'() {
    return this['_frost crystal'];
  }
  
  set 'frost crystal'(amt) {
    if (typeof amt === 'number'){
      this["_frost crystal"] += amt;
      if (this["_frost crystal"] <= 0) {
        this["_frost crystal"] = 0;
      }
    } else {
      console.log("failure to assign frost crystal.  Check input type");
    }
  }

  //GAMMA ROOT
  get 'gamma root'() {
    return this['_gamma root'];
  }
  
  set 'gamma root'(amt) {
    if (typeof amt === 'number'){
      this["_gamma root"] += amt;
      if (this["_gamma root"] <= 0) {
        this["_gamma root"] = 0;
      }
    } else {
      console.log("failure to assign gamma root.  Check input type");
    }
  }

  //IONISED COBALT
  get 'ionised cobalt'() {
    return this['_ionised cobalt'];
  }
  
  set 'ionised cobalt'(amt) {
    if (typeof amt === 'number'){
      this["_ionised cobalt"] += amt;
      if (this["_ionised cobalt"] <= 0) {
        this["_ionised cobalt"] = 0;
      }
    } else {
      console.log("failure to assign ionised cobalt.  Check input type");
    }
  }

  //NITROGEN-------------------------------------------
  get nitrogen() {
    return this['_nitrogen'];
  }
  
  set nitrogen(amt) {
    if (typeof amt === 'number'){
      this._nitrogen += amt;
      if (this._nitrogen <= 0) {
        this._nitrogen = 0;
      }
    } else {
      console.log("Failure to assign nitrogen.  Check input type");
    }
  }

  //PHOSPHORUS-------------------------------------------
  get paraffinium() {
    return this['_paraffinium'];
  }
  
  set paraffinium(amt) {
    if (typeof amt === 'number'){
      this._paraffinium += amt;
      if (this._paraffinium <= 0) {
        this._paraffinium = 0;
      }
    } else {
      console.log("Failure to assign paraffinium.  Check input type");
    }
  }

  //PHOSPHORUS-------------------------------------------
  get phosphorus() {
    return this['_phosphorus'];
  }
  
  set phosphorus(amt) {
    if (typeof amt === 'number'){
      this._phosphorus += amt;
      if (this._phosphorus <= 0) {
        this._phosphorus = 0;
      }
    } else {
      console.log("Failure to assign phosphorus.  Check input type");
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
      console.log("failure to assign pure ferrite.  Check input type");
    }
  }

  //PYRITE
  get pyrite() {
    return this['_pyrite'];
  }
  
  set pyrite(amt) {
    if (typeof amt === 'number'){
      this._pyrite += amt;
      if (this._pyrite <= 0) {
        this._pyrite = 0;
      }
    } else {
      console.log("Failure to assign pyrite.  Check input type");
    }
  }

  //RADON
  get radon() {
    return this['_radon'];
  }
  
  set radon(amt) {
    if (typeof amt === 'number'){
      this._radon += amt;
      if (this._radon <= 0) {
        this._radon = 0;
      }
    } else {
      console.log("Failure to assign radon.  Check input type");
    }
  }

  //SOLANIUM
  get solanium() {
    return this['_solanium'];
  }
  
  set solanium(amt) {
    if (typeof amt === 'number'){
      this._solanium += amt;
      if (this._solanium <= 0) {
        this._solanium = 0;
      }
    } else {
      console.log("Failure to assign solanium.  Check input type");
    }
  }

  //SULPHURINE-------------------------------------------
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

  //URANIUM-------------------------------------------
  get uranium() {
    return this['_uranium'];
  }
  
  set uranium(amt) {
    if (typeof amt === 'number'){
      this._uranium += amt;
      if (this._uranium <= 0) {
        this._uranium = 0;
      }
    } else {
      console.log("Failure to assign uranium.  Check input type");
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

    tradegood = tradegood.replace(/\s/g, '');
    console.log(tradegoodListObject[tradegood].baseLevel);

    if (tradegoodListObject[tradegood].baseLevel || !tradegoodListObject[tradegood]) {

      tradegoodListObject[tradegood].ingredients.forEach((ingr) => {

        console.log(`this[ingr] or ${ingr} is ${this[ingr]}`);
        //Because of how the setters work, this HAS to be =, not +=, to work properly
        
        this[ingr] = tradegoodListObject[tradegood][ingr];

        console.log(`this[ingr] or ${ingr} following assignment is ${this[ingr]}`);

      });

      console.log(this);

      return;

    } 
    else 
    {

      tradegoodListObject[tradegood].ingredients.forEach((ingr) => {
        this.addGoodToInv(tradegoodListObject, ingr);
      });

    }
    
    /*
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
      
    }*/

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